// const fs = require('fs')
// const path = require('path')
const Web3 = require('cita-web3')
const contractUtils = require('./contract_utils')
const utils = require('./utils')

const abiTo = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'

const deployer = {
  deploy: () => {},
}

deployer.deploy()

/**
 * 上传abi至区块链
 * @param {string} abi
 */

const storeAbiToBlockchain = (
  contract,
  abi,
  bytecode,
  params,
  chainId,
  web3
) => {
  const address = contract.address
  var hex = utils.fromUtf8(JSON.stringify(abi))
  if (hex.slice(0, 2) === '0x') hex = hex.slice(2)

  var code = (address.slice(0, 2) === '0x' ? address.slice(2) : address) + hex
  return new Promise((resolve, reject) => {
    web3.eth.sendTransaction(
      {
        ...params,
        chainId,
        to: abiTo,
        data: code,
      },
      function(err, res) {
        if (err) {
          reject(err)
        } else {
          resolve(contract)
        }
      }
    )
  })
}

const deployContract = (contract, abi, bytecode, params, chainId, web3) => {
  return new Promise((resolve, reject) => {
    contract.new({ ...params, data: bytecode, chainId }, (err, contract) => {
      if (err) {
        reject(err)
      } else if (contract.address) {
        resolve(contract)
      }
    })
  })
    .then(async (contract) => {
      return await storeAbiToBlockchain(
        contract,
        abi,
        bytecode,
        params,
        chainId,
        web3
      )
    })
    .then((contract) => {
      return contract
    })
    .catch((err) => {
      throw err
    })
}

module.exports = (contractInfo, web3) => {
  return new Promise((resolve, reject) => {
    const chainId = 1
    const { bytecode, abi } = contractInfo
    const contract = web3.eth.contract(abi)
    contractUtils.initBlockNumber(web3, function(params) {
      deployContract(contract, abi, bytecode, params, chainId, web3)
        .then((ins) => {
          console.log(ins.address)
          resolve(ins)
        })
        .catch((err) => {
          console.error(err)
          reject(err)
        })
    })
  })
}

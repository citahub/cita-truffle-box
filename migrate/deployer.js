// const fs = require('fs')
// const path = require('path')
const Web3 = require('cita-web3')
const contractUtils = require('./contract_utils')
const utils = require('./utils')
const log = require('./log')

// const log = console.log.bind(console, '\n>>>')
log.t('deployer start')

const SERVER = 'http://47.75.129.215:1337/'

const web3 = new Web3(new Web3.providers.HttpProvider(SERVER))

// const code = require('./contract_code')[':FileManage']

const abiTo = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'

const deployer =  {
  deploy: () => {},
}

deployer.deploy()

/**
 * 上传abi至区块链
 * @param {string} abi
 */

const storeAbiToBlockchainPromise = (
  contract,
  abi,
  bytecode,
  params,
  chainId,
  code
) => (resolve, reject) => {
  log.t('storeAbiToBlockchainPromise')
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
}
const storeAbiToBlockchain = (contract, abi, bytecode, params, chainId) => {
  log.t('storeAbiToBlockchain')
  const address = contract.address
  var hex = utils.fromUtf8(JSON.stringify(abi))
  if (hex.slice(0, 2) === '0x') hex = hex.slice(2)

  var code = (address.slice(0, 2) === '0x' ? address.slice(2) : address) + hex
  return new Promise(
    storeAbiToBlockchainPromise(contract, abi, bytecode, params, chainId, code)
  )
}

const deployContractPromise = (contract, abi, bytecode, params, chainId) => (
  resolve,
  reject
) => {
  log.t('deployContractPromise')
  contract.new({ ...params, data: bytecode, chainId}, (err, contract) => {
    if (err) {
      reject(err)
    } else if (contract.address) {
      resolve(contract)
    }
  })
}

const deployContract = (contract, abi, bytecode, params, chainId) => {
  log.t('deployContract')
  return new Promise(
    deployContractPromise(contract, abi, bytecode, params, chainId)
  )
    .then(async (contract) => {
      return await storeAbiToBlockchain(
        contract,
        abi,
        bytecode,
        params,
        chainId
      )
    })
    .then((contract) => {
      return contract
    })
    .catch((err) => {
      throw err
    })
}

// function deployContract() {
//   const info = {
//     privkey: '?',
//     nonce: getRandomInt(),
//     quota: '?',
//     data: '?',
//     validUntilBlock: '?',
//   }
//   const callback = (err, contract) => {
//     if (err) {
//       console.error(err)
//       return
//     } else if (contract.address) {
//       myContract = contract
//       console.log('address: ' + myContract.address)
//       callMethodContract() // 调用合约方法
//     }
//   }
//   Contract.new(info, callback)
// }

module.exports = (contractInfo) => {
  return new Promise((resolve, reject) => {
    log.t('deployerPromise')
    const chainId = 1
    const { bytecode, abi } = contractInfo
    const contract = web3.eth.contract(abi)
    contractUtils.initBlockNumber(web3, function(params) {
      // const info = { contract, abi, bytecode, params, chainId }
      deployContract(contract, abi, bytecode, params, chainId)
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

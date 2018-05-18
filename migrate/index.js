const fs = require('fs')
const path = require('path')
const deployer = require('./deployer')
const Web3 = require('cita-web3')
const log = require('./log')

const dirFilesRequire = (dir) => {
  const rootPath = process.cwd()
  const p = path.resolve(rootPath, dir)
  log(p)
  const files = fs.readdirSync(p)
  const a = []
  files.forEach((file, i) => {
    const content = require(p + '/' + file)
    a.push(content)
  })
  return a
}

const contractFileNames = () => {
  const dir = './build/contracts'
  const cons = dirFilesRequire(dir)
  return cons
}

const deploy = async (web3) => {
  const cons = contractFileNames()
  const insList = []
  const deployAll = async () => {
    const len = cons.length
    for (let i = 0; i < len; i++) {
      const con = cons[i]
      const ins = await deployer(con, web3)
      insList.push(ins)
    }
    // await cons.forEach(await deploy)
  }
  await deployAll()
  return insList
}

const test = async (web3) => {
  const insList = await deploy(web3)
}

const parsedCommandLine = () => {
  const { argv } = process
  let args = null
  if (argv.length >= 3) {
    args = argv.splice(2)
  }
  return args
}

const parsedNetorkWeb3 = (network) => {
  const { host, port } = network
  let { provider } = network
  if (!provider) {
    const server = `http://${host}:${port}/`
    provider = new Web3.providers.HttpProvider(server)
  }
  const web3 = new Web3(provider)
  return web3
}

const parsedCommandWeb3 = (args) => {
  const p = path.resolve(__dirname, '../truffle.js')
  const config = require(p)
  const { networks } = config
  let network
  if (args && args[0] === '--network') {
    network = networks[1]
  } else {
    network = networks.development
  }
  const web3 = parsedNetorkWeb3(network)
  return web3
}

const main = () => {
  const args = parsedCommandLine()
  const web3 = parsedCommandWeb3(args)
  test(web3)
}

main()

const fs = require('fs')
const path = require('path')
const deployer = require('./deployer')

const log = console.log.bind(console, '>>>')
log('migrate start')

const dirFilesRequire = (dir) => {
  const p = path.resolve(__dirname, dir)
  const files = fs.readdirSync(p)
  const a = []
  files.forEach((file, i) => {
    const content = require(p + '/' + file)
    a.push(content)
  })
  return a
}

const contracts = () => {
  const dir = '../build/contracts'
  const cons = dirFilesRequire(dir)
  return cons
}

const deploy = async () => {
  const cons = contracts()
  const insList = []
  const deploy = (con, i) => {
    const ins = deployer(con)
    insList.push(ins)
  }
  const deployAll = async () => {
    const len = cons.length
    for (let i = 0; i < len; i++) {
      const con = cons[i]
      const ins = await deployer(con)
      insList.push(ins)
    }
    // await cons.forEach(await deploy)
    log('deploy all')
  }
  await deployAll()
  return insList
}

const test = async () => {
  const insList = await deploy()
  log('这里应该最后出现')
  await log('ins list', ...insList.map(ins => ins.address))
}

const main = () => {
  test()
}

main()

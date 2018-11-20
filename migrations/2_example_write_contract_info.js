const fs = require('fs')
const path = require('path')
const HelloWorld = artifacts.require('HelloWorld')

module.exports = function(deployer) {
  deployer.deploy(HelloWorld, 'test', { quota: 9999999, overwrite: false }).then((contract) => {
    contract.methods
      .sayHi()
      .call()
      .then((res) => console.log('call method sayHi:\n', res))

    const dirpath = path.resolve(process.cwd(), './deployed')
    fs.existsSync(dirpath) || fs.mkdirSync(dirpath)
    const fpath = path.resolve(dirpath, 'hellowroldDeployed.js')
    const f = fs.openSync(fpath, 'w+')

    let data = ''
    data += `const address = ${JSON.stringify(contract.address)}\n`
    data += `const abi = ${JSON.stringify(contract.abi)}\n\n`
    data += `export {address, abi}\n`

    fs.writeFileSync(f, data)
  })
}

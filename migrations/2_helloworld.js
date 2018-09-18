const fs = require('fs')
const path = require('path')
const HelloWorld = artifacts.require('HelloWorld')

module.exports = function(deployer) {
  deployer.deploy(HelloWorld, '测试', { quota: 9999999 }).then((contract) => {
    const dirpath = path.resolve(process.cwd(), './compiled')
    const fpath = path.resolve(dirpath, 'hellowroldCompiled.js')
    const f = fs.openSync(fpath, 'w+')

    let data = ''
    data += `const address = ${JSON.stringify(contract.address)}\n`
    data += `const abi = ${JSON.stringify(contract.abi)}\n\n`
    data += `export {address, abi}\n`

    fs.writeFileSync(f, data)
  })
}

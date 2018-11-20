var HelloWorld = artifacts.require('HelloWorld')

module.exports = function(deployer) {
  deployer
    .deploy([[HelloWorld, 'not changed', { overwrite: false }], [HelloWorld, 'not changed', { overwrite: false }]])
    .then(([contract, contract2]) => {
      contract.methods
        .sayHi()
        .call()
        .then((res) => console.log('call method sayHi 2:\n', res))
    })
}

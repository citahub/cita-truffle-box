var HelloWorld = artifacts.require('HelloWorld')

module.exports = function(deployer) {
  deployer.deploy([[HelloWorld, '测试', {overwrite: false}]]).then((res) => {
  })
}

var artifacts
if (artifacts) {
  var Migrations = artifacts.require('./HelloWorld.sol')
} else {
  // this should be the name of contracts json file in dir ./build/contracts
  var Migrations = 'HelloWorld'
}

module.exports = function(deployer) {
  deployer.deploy(Migrations)
}

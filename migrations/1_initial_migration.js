var artifacts
if (artifacts) {
    var Migrations = artifacts.require('./HelloWorld.sol')
} else {
    var Migrations = 'HelloWorld'
}

module.exports = function(deployer) {
    deployer.deploy(Migrations)
}

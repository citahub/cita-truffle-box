var artifacts
if (artifacts) {
    var Migrations = artifacts.require('./Migrations.sol')
} else {
    var Migrations = 'Migrations'
}

module.exports = function(deployer) {
    deployer.deploy(Migrations)
}

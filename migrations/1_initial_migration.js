var Migrations = artifacts.require('Migrations')

module.exports = function(deployer) {
  // Deploy the Migrations contract as our only task
  deployer.deploy(Migrations).then((res) => {
    console.log('hash', res.transactionHash)
    console.log('address', res.address)
  })
}

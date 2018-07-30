var artifacts
if (artifacts) {
  var Migrations = artifacts.require("Migrations");
} else {
  // this should be the name of contracts json file in dir ./build/contracts
  var Migrations = {
    build: 'Migrations',
  }
}

module.exports = function (deployer) {
  // Deploy the Migrations contract as our only task
  deployer.deploy(Migrations);
};

var artifacts
if (artifacts) {
  var HelloWorld = artifacts.require('HelloWorld')
} else {
  // this should be the name of contracts json file in dir ./build/contracts
  var HelloWorld = {
    build: 'HelloWorld',
  }
  var Migrations = {
    build: 'Migrations',
  }
}

module.exports = function(deployer) {
  deployer.deploy([[HelloWorld]]).then((res) => {
  })
}

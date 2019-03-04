module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration! 
  // in windows env you should delete truffle.js, or you would get error
  compilers: {
    solc: {
      version: "0.4.24", // A version or constraint - Ex. "^0.5.0"
      settings: {
        optimizer: {
          enabled: true,
          // runs: <number>   // Optimize for how many times you intend to run the code
        }
      }
    }
  },
  networks: {
    development: {
      host: '121.196.200.225', // your host
      port: 1337,
      network_id: '*',
      privateKey: '0x688163347C8BDC907472E630EE67401797CF0B9CA0BFB9B6843AC41A0547679C',
      quota: 953000
    },
  },
}
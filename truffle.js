const Web3 = require('cita-web3')
let web3, provider
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider)
} else {
    // set the provider you want from Web3.providers
    provider = new Web3.providers.HttpProvider('http://121.196.200.225:1337')
    web3 = new Web3(provider)
}
console.log('读取 truffle.js')

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
        development: {
            // host: '121.196.200.225',
            // port: 1337,
            provider: provider,
            network_id: '*', // Match any network id
        },
    },
}

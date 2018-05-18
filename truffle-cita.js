module.exports = {
    networks: {
        development: {
            host: '47.75.129.215',
            port: 1337,
            network_id: '*', // Match any network id
        },
    },
    contractInfo: {
        chainId: 0,
        to: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        privkey: 'aaa',
        // nonce: getRandomInt(),
        quota: 999999,
        // validUntilBlock: 0,
        version: 0,
    }
}

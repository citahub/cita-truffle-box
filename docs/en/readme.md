![](https://img.shields.io/badge/made%20for-Nervos%20AppChain-blue.svg)

# AppChain-Truffle-Box

This truffle box is customized for you to work with Nervos AppChain. You can use this box to develop DApps on Nervos AppChain. 
Please refer [our document](https://docs.nervos.org/) for more details about Nervos Network.

## Installation

1. Install Truffle globally

To use our truffle box, you need to install truffle first.
```
npm install -g truffle
```

2. Download the box.

```
truffle unbox Cryptape/AppChain-Truffle-Box
```

3. Install all the needed dependencies. 

```
npm install
```

## Configuration

You can configure your box in `truffle.js`.

The parameter structure is shown below.

```js
module.exports = {
  networks: {
    network_name: {
      host: 'ip_address',
      port: 'port',
      network_id: '*', // Use '*' to match any network id
      privateKey: 'private key', // a string, required
      // the following parameters are OPTIONAL
      // validUntilBlock: 999999, // an int,  default to (current block number)+88
      // nonce: '999', // a string, default to random int
      // quota: 999999, // an int, defaut to 999999
    }, // you can add other network after here
  },
}
```

### networks

> You can configure multiple networks in the configurations above.

You can specify the network you want to work with by 
```
truffle --network [network_name]
```

* `host`[required]  
Specify the host ip_address.

* `port`[required]  
Specify the host port.

* `network_id`[required]  
Specify the network_id.

* `privateKey` [required]  

  Your private key to send transaction.

* `nonce` [optional]  
  Nonce is used to prevent double-spending, default to be a random number from 1 - 100.
  Note that the type of `nonce` is string.

* `quota` [optional]  
  Similar to gas, default to 99999

* `validUntilBlock` [optional]  
  Similar to timeout, default to be `current height + 88`

## Compile[optional]
Compile the smart contract.
```
truffle compile
```

## Migration

First, add your migration scripts in `/migration`, for the details, please refer [this official document](https://cryptape.quip.com/mirjAqb1GJIa) for details.

Run the command to do migration. (Note that we can NOT use `truffle migrate` command here...)
```
npm run migrate
```

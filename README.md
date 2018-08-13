# AppChain-Truffle-Box

This truffle box is customized for you to work with Nervos AppChain. You can use this box to develop DApps on Nervos AppChain. 
Please refer [our document](https://docs.nervos.org/) for more details.

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

## Compile and Migrate Contracts
Compile and migrate the smart contracts. Note inside the development console we don't preface commands with truffle.
```
compile
migrate
```

## Configuration

You can configure your box in `truffle-appchain.js`.

The parameter structure is shown below.

```js
module.exports = {
  networks: {
    network_name: {
      host: 'ip_address',
      port: 0000,
      network_id: '*', // Use '*' to match any network id
    }, // you can add other network after here
  },
  contractInfo: {
    chainId: 0, // an int, required
    privateKey: 'private key', // a string, required
    // the following parameters are OPTIONAL
    // validUntilBlock: 999999, // an int,  default to (current block number)+88
    // nonce: '999', // a string, default to random int
    // quota: 999999, // an int, defaut to 999999
    // version: 0, // an int, defaut to 0
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

### contractInfo

* `chainId` [required]  
Chain id of AppChain.

* ``privkey`` [required]  
Your private key to send transaction.

* `nonce` [optional]  
Nonce is used to prevent double-spending, default to be a random number from 1 - 100.
Note that the type of `nonce` is string.

* `quota` [optional]  
Similar to gas, default to 99999

* `version` [optional]  
default to 0

* `validUntilBlock` [optional]  
Similar to timeout, default to be `current height + 88`

## Compile
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

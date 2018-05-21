# cita-truffle-box

# Installation

## Install truffle

```
npm install -g truffle
```

## Install Dependencies

```
npm install
```

# Usage

## Config

You can configure your box in `truffle-cita.js`.

```js
module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 1337,
            network_id: '*', // Match any network id
        },
    },
    contractInfo: {
        chainId: 0,
        privkey: 'private key',
        // validUntilBlock: [block number + 88],
        // nonce: [random int],
        // quota: [999999],
        // version: [0],
    },
}
```

### networks

支持 `--network [network name] ` 选择链地址

在 host + port 与 provider 中选择一组进行配置

### contractInfo

#### chainId

必须填写

chain id of cita, default to 0.

#### privkey

必须填写

Your private key to send transaction.

#### nonce

默认是 0 - 100 的随机整数
Use to prevent double-spending, default to random integer from 1 - 100

#### quota

Similar to gas, default to 99999

#### version

默认为 0
default to 0

#### validUntilBlock

默认为当前块高度 + 88



## Compile

```
truffle compile
```

## Migration

在 migrations 目录下参照模板编写编译代码

运行指令

```
npm run cita:migrate
```

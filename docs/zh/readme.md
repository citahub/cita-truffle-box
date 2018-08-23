![](https://img.shields.io/badge/made%20for-Nervos%20AppChain-blue.svg)

# AppChain-Truffle-Box

AppChain-Truffle-Box 是为了使开发者可以借助 Truffle 完成 Nervos AppChain 上的 DApp 开发.

请阅读 [我们的文档](https://docs.nervos.org/) 以了解 Nervos Network 详情

在使用这个项目之前, 你需要学会使用 [Truffle](https://truffleframework.com/docs/truffle/getting-started/installation)

## 安装

1. 全局安装 Truffle

必须先安装 Truffle 之后才能正确运行 AppChain-Truffle-Box.
```
npm install -g truffle
```

2. 在空目录下下载 box

```
truffle unbox Cryptape/AppChain-Truffle-Box
```

3. Truffle 会自动安装依赖, 但如果安装失败你可以自己手动安装

```
npm install
```

## 设置

在 `truffle.js` 中进行配置.

结构如下.

```js
module.exports = {
  networks: {
    network_name: {
      host: 'ip_address',
      port: 0000, // 
      network_id: '*', // 字符串, 必须设置
      privateKey: 'private key', // 字符串, 必须设置
      // 下面的属性是可选的
      // validUntilBlock: 999999, // 数字, 默认为当前块高度加上 88
      // nonce: '999', // 字符串, 默认为一个 1 - 100 之间的随机整数字符串
      // quota: 999999, // 整数, 默认为 999999
      // version: 0, // 整数, 默认为 0
    }, // you can add other network after here
  },
}
```

### networks

> 可以配置多个 network.

可以指定 network 在
```
truffle --network [network_name]
```

* `host`[required]  
  指定 ip 或域名. 不要带协议

* `port`[required]  
  指定端口.

* `network_id`[required]  
  为了兼容 Truffle, 这个属性必须设置, 但本身并没有意义.

  在程序中会自动更改为 'appchain' 后接所链接的 AppChain 的 chainId 属性值的字符串.

* `privateKey` [required]  
  你的私钥, 记得保管好, 不要泄露 .

* `nonce` [optional]  
  Nonce 是用来防止 double-spending, 

  字符串, 默认为一个 1 - 100 之间的随机整数字符串

* `quota` [optional]  
  类似 gas, 整数, 默认为 999999

* `validUntilBlock` [optional]  
  类似 timeout, 默认为当前块高度加上 88

## Compile
Compile the smart contract.
```
truffle compile
```

## Migration

你必须先完成迁移脚本才能使用 Truffle 与 AppChain 交互

First, add your migration scripts in `/migration`, for the details, please refer [this official document](https://cryptape.quip.com/mirjAqb1GJIa) for details.

Run the command to do migration. (Note that we can NOT use `truffle migrate` command here...)
```
npm run migrate
```

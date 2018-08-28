![](https://img.shields.io/badge/made%20for-Nervos%20AppChain-blue.svg)

# AppChain-Truffle-Box

AppChain-Truffle-Box 是为了使开发者可以借助 Truffle 完成 Nervos AppChain 上的 DApp 开发.

请阅读 [我们的文档](https://docs.nervos.org/) 以了解 Nervos Network 详情

这个项目替代了 Truffle 的 migrate 操作, 所以你需要先阅读 Truffle 的相关文档, 尤其是[RUNNING MIGRATIONS](https://truffleframework.com/docs/truffle/getting-started/running-migrations), 这是对 migrate 操作的详细说明. 

## 安装

1. 全局安装 Truffle

必须先安装 Truffle 之后才能正确运行 AppChain-Truffle-Box.
```shell
npm install -g truffle
```

2. 在空目录下下载 box

```shell
truffle unbox Cryptape/AppChain-Truffle-Box
```

3. Truffle 会自动安装依赖, 但如果安装失败你可以自己手动安装

```shell
npm install
```

## 设置

在 `truffle.js` 中进行配置.

结构如下. 相对于 Truffle 原本的配置, 这里多了 privateKey 属性.

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
    }, // you can add other network after here
  },
}
```

### networks

> 可以配置多个 network.

可以通过以下指令来指定 network
```shell
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

这一步可以省略, 因为在迁移时会检查合约有没有编译在正确的目录下并自动编译没有正确编译的合约

输入下面的指令来编译合约
```shell
truffle compile
```

## Migration

你必须先完成迁移脚本才能使用 Truffle 与 AppChain 交互

迁移脚本必须写在 migration 目录下.

在 migration 目录下有示例代码, 可以参照.

更多细节可以参阅 Truffle 的 [RUNNING MIGRATIONS](https://truffleframework.com/docs/truffle/getting-started/running-migrations)

输入下面的命令可以与 AppChain 交互 (注意这里 **不是** `truffle migrate` 命令)
```shell
npm run migrate
```

[![CITAHub](https://img.shields.io/badge/made%20for-CITAHub-blue.svg)](https://www.citahub.com/)

# CITA-Truffle-Box

[English](./README.md) | 简体中文

CITA-Truffle-Box 基于 [truffle-box](https://github.com/truffle-box) 进行开发并适配CITA，用于在 CITA 上开发 DApp。 
关于 CITA 的更多细节，请访问[文档网站](https://docs.citahub.com/en-US/cita/cita-intro)。

>注意：本项目重写了 [truffle-box](https://github.com/truffle-box) 的 truffle migrate 部分， 请先了解 truffle-tutorial，特别是 [RUNNING MIGRATIONS ](https://truffleframework.com/docs/truffle/getting-started/running-migrations) 部分。


## 安装

1. 安装 Truffle

为了使用 CITA-Truffle-Box，请先安装 truffle
```shell
yarn global add truffle
```

2. 下载代码

```shell
git clone https://github.com/cryptape/appchain-truffle-box.git
cd appchain-truffle-box/
rm -rf .git
yarn install
```

## 配置

可在 `truffle.js` 配置自己的 box。

配置选项如下：

```js
module.exports = {
  networks: {
    development: {
      host: 'ip_address', // eg. '121.196.200.225'
      port: 'port', // eg. 1337
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

### 网络

目前必须使用 'development' 作为 key。

* `host`[required]  
定义 host ip_address, 不要添加 protocol name。

* `port`[required]  
定义 host port。

* `network_id`[required]  
为了能与 truffle 兼容，必须设置属性，不过此属性无意义。

* `privateKey` [required]  
用于发送交易的私钥。

* `nonce` [optional]  
  Nonce 是一个用于阻止双花的字符串，默认是 1~100 的随机数。
  注意 `nonce` 的类型是 string。

* `quota` [optional]  
 与 ethereum 的 gas 意义一致，默认值为 99999。

* `validUntilBlock` [optional]  
超时机制，默认是 `current block height + 88` 

## 编译
编译智能合约。
```
truffle compile
```

## Migration 部分

首先，在 `/migration` 添加 migration scripts， 细节请参考 [RUNNING MIGRATIONS](https://truffleframework.com/docs/truffle/getting-started/running-migrations)。

输入命令进行 migration。（注意**无法**使用 `truffle migrate` ） 
```
yarn migrate
```

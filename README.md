# cita-truffle-box

# 安装

## 安装 truffle

```
npm install -g truffle
```

## 安装依赖

```
npm install
```

# 使用

## 配置

在 truffle-cita.js 下参照模板进行配置

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
        privkey: 'aaa',
        // validUntilBlock: '',
        // nonce: getRandomInt(),
        // quota: 999999,
        // version: 0,
    },
}
```

### networks

支持 `--network [network name] ` 选择链地址

在 host + port 与 provider 中选择一组进行配置

### contractInfo

#### chainId

必须填写

cita 链的 id

默认为 0

#### privkey

必须填写

你的私钥

#### nonce

默认是 0 - 100 的随机数字

#### quota

默认 999999

#### version

默认为 0

#### validUntilBlock

默认为当前块高度 + 88



## 编译合约

```
truffle compile
```

## 部署合约

在 migrations 目录下参照模板编写编译代码

运行指令

```
npm run cita:migrate
```



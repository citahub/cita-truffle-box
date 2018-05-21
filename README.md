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

### chainId

cita 链的 id

默认为 0

### privkey

你的私钥

### nonce

默认是随机数字

### quota

默认 999999

### version

默认为 0



## 编译合约

```
truffle compile
```

## 部署合约

在 migrations 目录下参照模板编写编译代码

运行指令

```
node migrate/index.js
```
或者

```
npm run cita:migrate
```



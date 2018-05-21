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

### chainId

chain id of cita, default to 0.

### privkey

Your private key to send transaction.

### nonce

Use to prevent double-spending, default to random integer from 1 - 100

### quota

Similar to gas, default to 99999

### version

default to 0

## Compile

```
truffle compile
```

## Migration

```shell
node migrate/index.js
# or
npm run cita:migrate
```

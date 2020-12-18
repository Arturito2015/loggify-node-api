# API Loggify NodeJs

Loggify JavaScript API implements the client-side and server-side


To get started using Loggify, see
[Create Account Loggify](https://loggify.info).

### Install
```bash
npm i @loggify/loggify-node-api
```
### Usage
```bash
const loggify = require('@loggify/loggify-node-api')
loggify.initialize(WORKSPACE_ID,WORKSPACE_CODE,WORKSPACE_NAME,hashCode);

// Async
await loggify.log('First Log','Hello Word Loggify')
// or
// Primisse
loggify.log('First Log','Hello Word Loggify').then(data => {}).catch(error => {})
```
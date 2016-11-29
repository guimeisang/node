'use strict'
const crypto = require('crypto');
const hmac = crypto.createHmac('sha256','secre-key');

hmac.update('hello word!');
hmac.update('hello node!');

console.log(hmac.digest('hex'));
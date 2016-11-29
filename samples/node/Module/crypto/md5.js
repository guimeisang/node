const crypto = require('crypto');

const hash = crypto.createHash('md5');

//可以任意多次的调用updata();

hash.update('kevin');
hash.update('guimeisang');

console.log(hash.digest('hex'));
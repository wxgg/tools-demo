'use strict';

const crypto = require('crypto');
const urlencode = require('urlencode');

/**
 * sha156 签名算法
 * @param {String} finalStr - 需要签名的字符串
 */
const sha256 = str => {
  let appKey = "f37e34e0f584283ab3d3e41464951e54";
  let secret = "dcd8332528c343f9b5sac1e6b16b86c4";
  let hmac = crypto.createHmac('sha256', Buffer(secret, 'UTF-8'))
  hmac.update("appKey" + appKey + "timestamp" + 1603689543415, 'utf8')
  let hash = hmac.digest('base64');
  console.log(hash);
  console.log(urlencode(Buffer(hash).toString('UTF-8')))
  return hash;
}

sha256('abcd')

//GENERATE A PUBLIC AND PRIVATE KEY
const { generateKeyPairSync,publicEncrypt, privateDecrypt } = require('crypto'); //built-in method
const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 1024, // the length of your key in bits
  // recommendation by node js docs
  publicKeyEncoding: { type: 'spki', format: 'pem',},
  privateKeyEncoding: {type: 'pkcs8', format: 'pem', },});
console.log('Public key : ' + publicKey);
console.log('Private key : ' +privateKey);
let data="Hello I am encrypted!"
const encryptedData = publicEncrypt( publicKey,Buffer.from(data) );
console.log("Encrypted data  : " + encryptedData.toString('hex'))
//You need the private key to decrypt the data
const decryptedData = privateDecrypt(privateKey,encryptedData);
console.log("Decrypted data : " + decryptedData.toString('utf-8'));
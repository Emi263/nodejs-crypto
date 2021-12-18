//built-in module in Node. js which deals with an algorithm that performs data encryption and decryption.
const { createCipheriv, randomBytes, createDecipheriv } = require("crypto");
// Cipher=>Ciphers allow you to encode and decode messages given a password/KEY
const data = "I am a Business Informatics student";
const key = randomBytes(32);
const iv = randomBytes(16); //initialization vector,  check docs for more
const cipher = createCipheriv("aes256", key, iv);  //aes-advanced encryption standard
// ENCRYPTION PROCESS
const encryptedMessage =
//encrypt the data in hex format with utf-8 variable-width character encoding
  cipher.update(data, "utf8", "hex") + cipher.final("hex"); 
console.log(`Encrypted data:   ${encryptedMessage}`);
// DECRYPTION PROCESS
//create a Decipheriv object with the SAME KEY provided to encrypt the data
const decipher = createDecipheriv("aes256", key, iv); 
const decryptedMessage =
decipher.update(encryptedMessage, "hex", "utf-8") + decipher.final("utf8");
console.log(`Decrypted data : ${decryptedMessage.toString("utf-8")}`);

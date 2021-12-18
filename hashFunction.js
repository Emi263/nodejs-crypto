//import the createHash method from built-in module
const { createHash,scryptSync, randomBytes } = require('crypto'); 
// Create a string hash
let password="secretpassword"
//sha=secure hashing algorithm 256bit
let hashedPass= createHash('sha256').update(password).digest('hex');
 //digest=output, could be base64 or hex
console.log(hashedPass);
//But it is not sufficient, easily predictable, so we add "SALT"
 const salt = randomBytes(16).toString('hex');
 const hashedPasswordWithSalt = scryptSync(password, salt, 64).toString('hex');
 console.log(hashedPasswordWithSalt); //more secure and less predictable

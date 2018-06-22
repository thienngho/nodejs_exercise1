const crypto = require('./cryptojson');

const input = {a: 1, b: 2};

input_encrypted = crypto.encrypted(input);

console.log("Encrypted");
console.log(input_encrypted);

output_decrypted = crypto.decrypted(input_encrypted);

console.log("Decrypted");
console.log(output_decrypted);

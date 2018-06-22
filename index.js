const crypto = require('./simplecrypto');

const plaintext = "This is a plaintext";

console.log("Encrypt: " + crypto.encrypted(plaintext));

const cipher = crypto.encrypted(plaintext);

console.log("Decrypt: " + crypto.decrypted(cipher));

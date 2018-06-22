const crypto = require('crypto');

const secret = 'P@ssw0rd';

exports.encrypted = function (plaintext) {
    const cipher = crypto.createCipher('aes192', secret);

    let encrypted = cipher.update(plaintext, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    return encrypted;
}

exports.decrypted = function (cipher) {
    const decipher = crypto.createDecipher('aes192', secret);
    let decrypted = decipher.update(cipher, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
}

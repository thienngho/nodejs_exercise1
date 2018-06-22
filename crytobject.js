const crypto = require('object-encrypter');
const password = 'P@ssw0rd';

const engine = crypto(password);

exports.encrypted = function (input) {
    const output = engine.encrypt(input);
    return output;
}

exports.decrypted = function (input) {
    const output = engine.decrypt(input);
    return output;
}

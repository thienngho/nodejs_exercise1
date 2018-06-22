const cryptojson = require('crypto-json');
const password = 'P@ssw0rd';

exports.encrypted = function (input) {
    const output = cryptojson.encrypt(input, password);
    return output;
}

exports.decrypted = function (input) {
    const output = cryptojson.decrypt(input, password);
    return output
}

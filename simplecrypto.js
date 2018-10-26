import { createCipher, createDecipher } from 'crypto';

const secret = 'P@ssw0rd';

export function encrypted (plaintext) {
    const cipher = createCipher('aes192', secret);

    let encrypted = cipher.update(plaintext, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    return encrypted;
}

export function decrypted (cipher) {
    const decipher = createDecipher('aes192', secret);
    let decrypted = decipher.update(cipher, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
}

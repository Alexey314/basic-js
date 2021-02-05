const CustomError = require("../extensions/custom-error");

/*
* Cryptography is awesome! Let's try to organize production of encryption machines. Our machines will use one of the
* encryption methods that are easy to understand, but also not amenable to simple cryptanalysis - the Vigenere cipher.
Our machine will have 2 modifications: direct and reverse (the type of machine is determined at the moment of creation).
* The direct machine simply encodes and decodes the string that was transmitted to it, and the reverse machine returns
* an inverted string after encoding and decoding.
Your task is to implement the class VigenereCipheringMachine. constructor of this class accepts true (or nothing) to
* create direct machine and false to create reverse machine. Each instance of VigenereCipheringMachine must have 2
* methods: encrypt and decrypt.
encrypt method accepts 2 parameters: message (string to encode) and key (string-keyword).
decrypt method accepts 2 parameters: encryptedMessage (string to decode) and key (string-keyword).
These parameters for both methods are mandatory. If at least one of them has not been given, an Error must be thrown.
* The text returned by these methods must be uppercase. Machines encrypt and decrypt only latin alphabet (all other
* symbols remain unchanged).
You don't need to validate value sent to constructor and to encrypt and decrypt methods (except throwing an Error on
* absence of argument for these methods).
For example:
const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);
directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
* */

let codec = function (msg, key, encode, reverse) {
    if (msg === undefined || key === undefined) {
        throw new Error('bad args');
    }
    const keyUp = key.toUpperCase();
    let keyIndex = 0;
    const aCode = "A".charCodeAt(0);
    const zCode = "Z".charCodeAt(0);
    const tableLen = zCode - aCode + 1;
    let msgArray = msg.toUpperCase().split("");

    msgArray = msgArray.map(function (val, index) {
        let symCode = val.charCodeAt(0);
        if (symCode < aCode || symCode > zCode) {
            return val;
        }
        let symRelCode = symCode - aCode;
        let coderOffset = keyUp.charCodeAt(keyIndex++ % keyUp.length) - aCode;
        return String.fromCharCode(aCode + (symRelCode + (encode ? 1 : -1) * coderOffset + tableLen) % tableLen);
    });

    if (reverse) {
        msgArray.reverse();
    }

    return msgArray.join("");
}

class VigenereCipheringMachine {
    constructor(direct) {
        this.reverse = direct === false;
    }

    encrypt(msg, key) {
        return codec(msg, key, true, this.reverse);
    }

    decrypt(msg, key) {
        return codec(msg, key, false, this.reverse);
    }
}

module.exports = VigenereCipheringMachine;

const CryptoJS = require("crypto-js");

utils = {
    isObjEmpty: (obj) => {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) return false;
        };

        return true;
    },
    encrypted: (data, key) => {
        return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
    },
    decrypted: (data, key) => {
        return JSON.parse(CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8));
    }


};

module.exports = utils;
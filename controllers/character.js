const { response } = require('express');
const CryptoJS = require("crypto-js");
const plumbus = require('rickmortyapi');
const utils = require('../utils');

const dataCharacter = async(req, res = response) => {
    const { name, status, species, type, gender } = req.query;

    if (utils.isObjEmpty(req.query) == true) {
        const characters = await plumbus.getCharacters();

        let encryptedDoc = utils.encrypted(characters, process.env.KEY);

        res.json({
            encryptedDoc
        });
    } else if (name !== undefined) {
        const characterName = await plumbus.getCharacters({ name });

        let encryptedDoc = utils.encrypted(characterName, process.env.KEY);

        res.json({
            encryptedDoc
        });
    } else if (status !== undefined) {
        const characterStatus = await plumbus.getCharacters({ status });

        let encryptedDoc = utils.encrypted(characterStatus, process.env.KEY);

        res.json({
            encryptedDoc
        });
    } else if (species !== undefined) {
        const characterSpecies = await plumbus.getCharacters({ species });

        let encryptedDoc = utils.encrypted(characterSpecies, process.env.KEY);

        res.json({
            encryptedDoc
        });
    } else if (gender !== undefined) {
        const characterGender = await plumbus.getCharacters({ gender });

        let encryptedDoc = utils.encrypted(characterGender, process.env.KEY);
        // let decryptedDoc = utils.decrypted(encryptedDoc, key);

        res.json({
            encryptedDoc
        });



    }




};



module.exports = { dataCharacter }
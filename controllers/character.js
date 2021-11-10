const { response } = require('express');
const bcrypt = require('bcryptjs');
const plumbus = require('rickmortyapi');
const utils = require('../utils');

const dataCharacter = async(req, res = response) => {

    const { name, status, species, type, gender } = req.query;
    console.log(name);
    console.log(status)
    console.log(species)

    if (utils.isObjEmpty(req.query) == true) {
        const characters = await plumbus.getCharacters();

        res.json({
            characters: characters
        });
    } else if (name !== undefined) {
        const characterName = await plumbus.getCharacters({ name });

        res.json({
            characterName: characterName
        });
    } else if (status !== undefined) {
        const characterStatus = await plumbus.getCharacters({ status });

        res.json({
            characterStatus: characterStatus
        });
    } else if (species !== undefined) {
        const characterSpecies = await plumbus.getCharacters({ species });

        res.json({
            characterSpecies: characterSpecies
        });
    } else if (gender !== undefined) {
        const characterGender = await plumbus.getCharacters({ gender });

        res.json({
            characterGender: characterGender
        });
    }




};



module.exports = { dataCharacter }
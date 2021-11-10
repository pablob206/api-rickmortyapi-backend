const { response } = require('express');
const bcrypt = require('bcryptjs');

const plumbus = require('rickmortyapi');


const dataCharacters = async(req, res) => {

    const characters = await plumbus.getCharacters();

    res.json({
        characters: characters
    })

};


module.exports = { dataCharacters }
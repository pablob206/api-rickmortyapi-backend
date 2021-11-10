const { response } = require('express');
const bcrypt = require('bcryptjs');
const plumbus = require('rickmortyapi');


const dataCharacter = async(req, res = response) => {

    const { name } = req.query;

    // console.log(name)

    const characters = await plumbus.getCharacters();

    res.json({
        characters: characters
    })

};



module.exports = { dataCharacter }
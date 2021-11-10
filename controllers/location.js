const { response } = require('express');
const bcrypt = require('bcryptjs');
const plumbus = require('rickmortyapi');


const dataLocation = async(req, res = response) => {

    // const { name } = req.query;

    const locations = await plumbus.getLocations();

    res.json({
        locations
    })

};


module.exports = { dataLocation }
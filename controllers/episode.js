const { response } = require('express');
const bcrypt = require('bcryptjs');
const plumbus = require('rickmortyapi');


const dataEpisode = async(req, res = response) => {

    // const { episode } = req.query;

    const episodes = await plumbus.getEpisodes();

    res.json({
        episodes
    })

};


module.exports = { dataEpisode }
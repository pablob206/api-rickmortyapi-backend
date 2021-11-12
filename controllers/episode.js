const { response } = require('express');
const plumbus = require('rickmortyapi');


const dataEpisode = async(req, res = response) => {

    // const { episode } = req.query;

    const episodes = await plumbus.getEpisodes();

    res.json({
        episodes
    })

};


module.exports = { dataEpisode }
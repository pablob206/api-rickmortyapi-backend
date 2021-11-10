const { Router } = require('express');
const router = Router();
const { dataEpisode } = require('../controllers/episode')


router.get('/episode', dataEpisode);


module.exports = router;
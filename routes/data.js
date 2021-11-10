const { Router } = require('express');

const router = Router();

const { dataCharacters } = require('../controllers/data')

router.get('/characters', dataCharacters);


module.exports = router;
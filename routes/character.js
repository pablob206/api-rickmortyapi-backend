const { Router } = require('express');
const router = Router();
const { dataCharacter } = require('../controllers/character')


router.get('/character', dataCharacter);


module.exports = router;
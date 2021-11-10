const { Router } = require('express');
const router = Router();
const { dataLocation } = require('../controllers/location')


router.get('/location', dataLocation);


module.exports = router;
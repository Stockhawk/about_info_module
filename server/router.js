const express = require('express');

const controllers = require('./controllers.js');

const router = express.Router();

router.get('/quotes/:symbol', controllers.quotes.get);
router.post('/quotes/', controllers.quotes.post);
router.put('/quotes/:symbol', controllers.quotes.put);
router.delete('/quotes/:symbol', controllers.quotes.delete);

router.get('/tags/:symbol', controllers.tags.get);
router.post('/tags/', controllers.tags.post);
router.put('/tags/:symbol', controllers.tags.put);
router.delete('/tags/:symbol', controllers.tags.delete);

module.exports = router;
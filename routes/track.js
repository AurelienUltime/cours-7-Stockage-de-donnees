var express = require('express');
var router = express.Router();
// we import our user controller
var track = require('../controllers/track.controller');

// Get les nombres de listenings 
router.get('/listenings', track.findListenings);

router.get('/', track.findAll);

module.exports = router;
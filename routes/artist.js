var express = require('express');
var router = express.Router();
// we import our user controller
var artist = require('../controllers/artist.controller');

/* GET one user */
router.get('/', artist.findAll); 

//GET birthdate from each artist
router.get('/births', artist.findBirth);

/* router.get('/:id', artist.findOne);

//router.get('/:artistId', artist.findOne);

/* DELETE  one user */
//router.delete('/:artistId', artist.delete);
/* update  one user */
//router.post('/:id', artist.update);

/* create  one user */
router.put('/', artist.create);

module.exports = router;
const Album = require('../models/album.model.js');
const _ = require("lodash");

/* // Create and Save a new Artist
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).json({
      message: 'name can not be empty'
    });
  }

  // Create a new User
  const artist = new Artist({
    name: req.body.name,
    birth: req.body.birth,
    followers: req.body.followers,
    album: req.body.album,
  });

  // Save User in the database
  artist
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly user integrated
      res.json(data);
    })
    .catch(err => {
      // In case of error during insertion of a new user in database we send an
      // appropriate message
      res.status(500).json({
        message: err.message || 'Some error occurred while creating the User.'
      });
    });
}; */

// Trouver tous ses Artistes

exports.findAll = (req, res) => {
  Album.find({})
    .then(albums => {
   console.log(albums);
      res.status(200).json(albums);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};
// trouver les dates d'anniversaire 
/*
exports.findBirth = (req, res) => {
  Artist.find({})
    .then(artistes => {
        const birthOfArtists = _.map(artistes, function(unArtiste){
          var result = _.pick(unArtiste, ['name', 'birth']);
          return result;
        })
      res.status(200).json(birthOfArtists);
    }) 
    .catch(err => {
      res.status(500).json({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};

*/


/*  // Trouver un seul Artiste
exports.findOne = (req, res) => {
  Artist.findById(req.params.id)
    .then(artistes => {
      if (!artistes) {
        return res.status(404).json({
          message: 'User not found with id ' + req.params.id
        });
      }
      res.json(artistes);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).json({
          message: 'Artist not found with id ' + req.params.id
        });
      }
      return res.status(500).json({
        message: 'Error retrieving user with id ' + req.params.id
      });
    });
};

// Update a User identified by the UserId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.name) {
    return res.status(400).send({
      message: 'first name can not be empty'
    });
  }

  // Find user and update it with the request body
  Artist.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.name,
      birth: req.body.birth,
      followers: req.body.followers,
      album: req.body.album
    },
    { new: true }
  )
    .then(artist => {
      if (!artist) {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.id
        });
      }
      res.send(artist);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Artist not found with id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Error updating user with id ' + req.params.id
      });
    });
};
/*
// Delete a User with the specified UserId in the request
exports.delete = (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(artist => {
      if (!artist) {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.id
        });
      }
      res.send({ message: 'Artist deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Could not delete user with id ' + req.params.id
      });
    });
};
*/
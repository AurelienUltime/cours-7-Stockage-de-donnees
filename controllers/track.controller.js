const Track = require('../models/track.model.js');
const _=require("lodash");


exports.findAll = (req, res) => {
    Track.find({}).then(tracks => {
     console.log(tracks);
        res.status(200).json(tracks);
      })
      .catch(err => {
        res.status(500).json({
          message: err.message || 'Some error occurred while retrieving users.'
        });
      });
  };




// trouver le nombre d'ecoutes par chanson 

exports.findListenings = (req, res) => {

  Track.find({}).then(tracks => {
      const trackListenings = _.map(tracks, function(unTrack){
          var result = _.pick(unTrack,['title','listenings']);
          return result;

      })
      res.status(200).json(trackListenings);
  })
  .catch(err => {
      res.status(500).json({
          message: err.message || 'Some error occured '
      });
  });
};
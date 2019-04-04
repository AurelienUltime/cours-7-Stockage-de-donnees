const mongoose = require ('mongoose');
const Schema= mongoose.Schema;
const albumSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
          },
          release: String,
          type: String,
          cover_picture_url:String,
          track: Array
    },
    {
        collection:'Album',
    }

  
); 
module.exports = mongoose.model('Album', albumSchema);
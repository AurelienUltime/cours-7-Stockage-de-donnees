const mongoose = require ('mongoose');
const Schema= mongoose.Schema;
const artistSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
          },
          birth: String,
          followers: Number
    },
    {
        collection:'Artist',
    }

  
); 
module.exports = mongoose.model('Artist', artistSchema);
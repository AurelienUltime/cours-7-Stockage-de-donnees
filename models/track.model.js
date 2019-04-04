const mongoose = require ('mongoose');
const Schema= mongoose.Schema;
const trackSchema = new mongoose.Schema(
    {
        title: String,
       
         
          duration: Number,
          listenings: Number,
          likes: Number
    },
    {
        collection:'Track',
    }

  
); 
module.exports = mongoose.model('Track', trackSchema); 
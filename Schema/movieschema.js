var mongoose=require('mongoose');

const movieSchema = new mongoose.Schema({
    Moviename : { type : String, required : true },
    Lead_actor_name:{ type : String, required : true },
   Lead_actress_name:{ type : String, required : true },
   
   Budget_in_dollar:{ type : Number, required : true }, // Maximum calorie per day as set by user.
   Directorname:{ type : String, required : true },
   Country:{ type : String, required : true },
   Detail:{ type : String, required : true },
    });


module.exports = mongoose.model('movieschema', movieSchema);

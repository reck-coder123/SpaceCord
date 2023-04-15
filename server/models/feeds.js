const mongoose=require('mongoose');
const feedschema=mongoose.Schema({
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"inscribe"
    }
})
const Feed=mongoose.model('feeds',feedschema);
module.exports=Feed
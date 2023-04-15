const mongoose=require('mongoose');
const inscribeschema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        
    },
    title:{
        type:String,
        required:true,
        trim:true,
    },
    content:{
        type:String,
        required:true,
    },
    comments:[{
        senderid:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
        comment:{
            type:String,
            trim:true
        }
    }],
    upcord:{
        type:Number,
        default:0,
    },
    downcord:{
        type:Number,
        default:0,
    }


})
const Inscribe=mongoose.model('Inscribe',inscribeschema);
module.exports={Inscribe};
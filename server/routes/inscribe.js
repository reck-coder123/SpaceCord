const express=require('express');
const router=express.Router();
const {User} =require('../models/users')
const {Inscribe}=require('../models/inscribe.js');
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

router.post('/',async(req,res)=>{
    try {
    const id=localStorage.getItem("id");
    const user= await User.findById(id);
    if(!user){
        res.status(400).redirect(`${process.env.CLIENT_URL}signup`)
    }
    else{
        const post=new Inscribe({
            userId: user._id,
            title:req.body.title,
            content:req.body.content,
        })
        await post.save();
        res.status(202).send('Post Made');
    }
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})
module.exports=router;
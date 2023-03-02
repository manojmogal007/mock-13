const express=require('express')
const {Usermodel}=require('../model/user.model')


const userRouter=express.Router()

userRouter.post('/adduser',async(req,res)=>{
    try{
        const player=new Usermodel(req.body)
        await player.save()
        res.send({'msg':'Player added'})
    }catch(err){
        console.log(err)
        res.send({'msg':'Error'})
    }
})

userRouter.patch('/update',async(req,res)=>{
    const {name,level,score}=req.body

    try{
        await Usermodel.findOneAndUpdate({name},req.body)
        res.send({'msg':'Player score updated'})
    }catch(err){
        console.log(err)
        res.send({'msg':'Error'})
    }
})

userRouter.get('/randomword',async(req,res)=>{
    
    try{
        let random=""
        const char="abcdefghijklmnopqrstuvwxyz"
        for(let i=0;i<Math.random()*20;i++){
        const ind=Math.floor(Math.random()*char.length)
        random+=char[ind]
    }
        res.send({'word':random})
    }catch(err){
        console.log(err)
        res.send({'msg':'Error'}) 
    }
})

userRouter.get('/all',async(req,res)=>{
    try{
        const all=await Usermodel.find()
        res.send({'msg':'All players','player':all})
    }catch(err){
        console.log(err)
        res.send({'msg':'Error'})
    }
})


module.exports={userRouter}
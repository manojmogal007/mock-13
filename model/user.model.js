const mongoose=require('mongoose')


const userSchema=mongoose.Schema({
    name:String,
    level:String,
    score:Number
})


const Usermodel=mongoose.model('user',userSchema)


module.exports={Usermodel}
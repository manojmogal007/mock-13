const express=require('express')
const {connection}=require('./config/db')
const cors=require('cors')
require('dotenv').config()
const {userRouter}=require('./routes/user.routes')


const app=express()
app.use(express.json())
app.use(cors())
app.use('/user',userRouter)



app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log('Connected to database')
    }catch(err){
        console.log(err)
        console.log('Connection error')
    }
    console.log(`Server started on port ${process.env.port}`)
})
require('dotenv').config()

const express=require('express')

const cors=require('cors')

const ecartServer=express()

const router=require('./Routes/routes')

ecartServer.use(cors())

ecartServer.use(express.json())

ecartServer.use(router)

require('./Connections/connection')

// ecartServer.post('/postexc',(req,res)=>{
//     res.json(123)
// })

const PORT=8000 || process.env.port
ecartServer.listen(PORT,()=>{
    console.log(`_______ecartServer started at Port Number ${PORT}________`);
})
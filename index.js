const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const server = express()

server.use(cors())
server.use(express.json()) //for body requests, so not always needed

const port = process.env.PORT || 9000 //use heroku's port, default to 9000 if no port found

server.listen(port, ()=>{
    console.log(`Listening on Port ${port}`)
})

server.use('/api', (_,res)=>{ // the _ is like # for dead link or placeholder
    res.json({data:'API is accounted for.'})
})

// console.log('Success!')
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USERNAME) //for Macs, it's just USER
// console.log(process.env.PORT)


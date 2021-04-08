const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const server = express()
const path = require('path')

server.use(cors())
server.use(express.json()) //for body requests, so not always needed
server.use(express.static(path.join(__dirname,'client/build')))

const port = process.env.PORT || 9000 //use heroku's port, default to 9000 if no port found

server.listen(port, ()=>{
    console.log(`Listening on Port ${port}`)
})

server.use('/api/', (_,res)=>{ // the _ is like # for dead link or placeholder
    res.json({
                data:[{
                        confirmation: 'API is accounted for.',
                        testing: [1,2,3,4,5,6,7,8,9,0],
                        thisIsData: 212,
                        LoTRCharacter:[{
                                name: "Frodo",
                                quest: "Take the Ring to Mordor.",
                                friend: "Samwise",
                                location: "Middle Earth"
                        }],
                        FavoriteColors:[{
                            red: false,
                            green: false,
                            blue: true,
                            orange: true,
                            purple: false,
                            black: false,
                            white: false,
                            violet: false,
                            pink: false
                        }],
                        Dogs:[
                            "Doggo", "Scrubs", "Woofwoof", "Chief", "George", "Max", "Lisa", "Roof", "Sparky"
                        ]
                }]
            })
})
//Above is where you store your API Data! :)



// console.log('Success!')
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USERNAME) //for Macs, it's just USER
// console.log(process.env.PORT)


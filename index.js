const express = require("express")
const server = express()

server.get("/", (req, res) => {
    return res.json({mensagen: "Romegol"})
})

server.get("/motel", (req,res)=> {
    return res.json({mensagen: "PH penis"})
} )

server.listen(3333, ()=>{
    console.log('server on')
})
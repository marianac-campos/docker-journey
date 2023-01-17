const express = require('express')
let app = express();

const PORT_BUILD = process.env.PORT_BUILD

app.use(express.static("."));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.listen(PORT_BUILD, ()=>{
    console.log(`Server is listening on port ${PORT_BUILD}`)
})
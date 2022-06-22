const express = require(`express`);
const { request } = require("http");
const console = require(`morgan`);
const cookie = require(`set-cookie-parser`);


let app = express();

app.use(express.json());



app.use(console(`dev`));



app.get(`/`, (req,res)=>{
    res.end(`Hello`)
})

app.listen(4000, ()=>{
    console.log(`Listening on server 4k`)
})

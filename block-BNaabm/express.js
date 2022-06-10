let express = require(`express`);

let app = express();

app.use(`/`, (Request, Response, Next)=>{
    Response.end(`Welcome`);
    // next();
})

app.get(`/about`, (Request, Response)=>{
    Response.end(`Welcome Abroad`);
})

app.listen(4000, ()=>{
    console.log(`Listening at port 4000`)
})
let express = require(`express`);

let app = express();

app.use((req,res,next)=>{
    console.log(req.method, req.url)
    next();
});

app.use(express.json());

app.post(`/json`, (req,res)=>{
    console.log(req.body)
})


app.listen(3000, ()=>{
    console.log(`Welcome to port 3000`)
})
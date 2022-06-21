let express = require(`express`);

let app = express();

app.get(`/`, (request, response) => {
  response.sendFile(__dirname + `/index.html`);
});

app.get(`/new`, (request, response) => {
  response.sendFile(__dirname + `/new.html`);
});

app.get("/new", (req, res) => {
  console.log(req.body.name);
  res.send(req.body.name);
});

app.get(`/users/:username`, (request,response)=>{
    let username = request.params.username;
    response.send(username)
})

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});

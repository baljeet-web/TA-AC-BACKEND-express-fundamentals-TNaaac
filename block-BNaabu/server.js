const { request, response } = require("express");
let express = require(`express`);

let app = express();

app.get(`/`, (request, response) => {
  response.end(`Listening`);
});

app.get(`/about`, (request, response) => {
  response.end(`Listening`);
});

app.use(`/admin`,(request, response , next)=>{
    next(`unauthorised`)
})

app.use((request, response, next) => {
  response.send(`Page not found`);
});

// app.use((err, req, res, next) => {
//   res.send(err);
// });

app.listen(3000, () => {
  console.log(`Listening on port 3k`);
});

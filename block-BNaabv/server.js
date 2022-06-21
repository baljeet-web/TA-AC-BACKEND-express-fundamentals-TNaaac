let express = require(`express`);
let morgan = require(`morgan`);
let cookie = require(`cookie-parser`);

let app = express();

app.use(morgan(`dev`));

app.use(cookie());

app.use((req, res, next) => {
  res.cookie(`count`, 1);
  next();
});

app.use(express.json());

app.post("/json", (req, res) => {
  res.send(req.body);
});

app.get(`/`, (req, res) => {
  res.end(`Hello World`);
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});

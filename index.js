const express = require("express");
const usersRouter = require("./routes/users");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/posenet", (req, res) => {
  res.sendFile(__dirname + "/public/posenet.html");
});

app.get("/ssd", (req, res) => {
  res.sendFile(__dirname + "/public/ssd.html");
});

app.get("/imagenet", (req, res) => {
  res.sendFile(__dirname + "/public/imagenet.html");
});

app.get("/face", (req, res) => {
  res.sendFile(__dirname + "/public/face.html");
});

app.get("/faceparts", (req, res) => {
  res.sendFile(__dirname + "/public/faceparts.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

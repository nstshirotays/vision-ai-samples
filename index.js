const express = require("express");
const usersRouter = require("./routes/users");
const app = express();
const port = 3000;

// ルートパスへのGETリクエストに対してindex.htmlを返す
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const server = express();

server.all("/", (req, res) => {
  res.send("Your account is alive!");
});

function keepAlive() {
  server.listen(3000, () => {
    console.log("account is on done!");
  });
}
//حقوق عمر .*omar#6277
module.exports = keepAlive;
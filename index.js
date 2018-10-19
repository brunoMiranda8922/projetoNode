var express = require("express");
var consign = require("consign");

const port = 3000;
const app = express();

app.set("json spaces", 4);

consign()
  .include("./routes")
  .into(app);

app.listen(port, () => { 
    console.log(`server up - porta ${port}`);
});

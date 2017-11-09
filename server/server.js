const path = require("path");
const publicPath = path.join(__dirname+"/../public");
const express = require("express");
const port = process.env.PORT || 3000;
const hbs = require ("hbs");

const app = express();

app.use(express.static(publicPath));

// app.set('views', (publicPath+"/views"));
// app.set('view engine', 'hbs');
// app.get("/", function(req,res){
//     res.render("index.hbs");
// });

app.listen(port, () => console.log(`Listening on ${port} `));
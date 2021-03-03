const express = require('express');
const path = require("path");
const ejs = require('ejs');
require('dotenv').config()

const app = express();
app.set("views", path.join(__dirname, "/views"))
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.render("home.ejs");
    });

app.listen(3000, function () {
    console.log("Put http://localhost:3000 into the url bar to see your new app"); //String template literal, accuratley shows the port you are serving on Heroku or local. 
});
const express = require('express');
const path = require("path");
const ejs = require('ejs');
require('dotenv').config()

var aviationStackKey = process.env.AVIATIONSTACK_KEY;

const app = express();
app.set("views", path.join(__dirname, "/views"))
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.render("home.ejs");
    });

    app.get("/return", async(req, res) =>{
        var inputSearch = req.query.coordinates;

        function inputReverse(input){
            var split = input.split(",");
            var reverse = split.reverse();
            var rebuild = reverse.join(",")
            return rebuild;
            }

            var test = inputReverse(inputSearch)

        res.render("return.ejs", {EJSinputSearch: test});
        });

app.listen(3000, function () {
    console.log("Put http://localhost:3000 into the url bar to see your new app" + " " + aviationStackKey); //String template literal, accuratley shows the port you are serving on Heroku or local. 
});
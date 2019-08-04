var express = require("express");
var app = express();

var port = 3000;

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var predictor = require("./modules/predictor");

app.use("/assest", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index", { prediction: null });
});

app.post("/trip", urlencodedParser, function(req, res) {
  let dataTrip = {
    plateNumber: req.body.plateNumber || "",
    date: req.body.tripDate || "",
    time: req.body.tripTime || ""
  };
  var result = predictor.analyzePlateNumber(dataTrip);
  res.render("index", { prediction: result });
});

app.listen(port, function() {
  console.info("Server running on port:", port);
});

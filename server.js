// ===========================================
// ============== DEPENDENCIES  ============
// ===========================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")
const friends = require("data/friends.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));



// ===========================================
// =========  COMPARE SCORES  ================
// ===========================================







// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

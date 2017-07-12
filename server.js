cd// ===========================================
// ============== DEPENDENCIES  ============
// ===========================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const friendFind = require("./app/data/friends.js");
console.log(friends)
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

// let friendsInput = friendFind.friends

// ====================================
//            Page Router
// ====================================
require.("./app/routing/apiRoutes.js")(app);
require.("./app/routing/htmlRoutes.js")(app);



//array for input information
let friendAddedName = []

//array for images info
let friendAddedImage = []

// ====================================
//            LOGIC comparison
// ====================================





// ===========================================
// =========  COMPARE SCORES  ================
// ===========================================

//pull information from freinds to compare scores then push match to modal on front endpoint









// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

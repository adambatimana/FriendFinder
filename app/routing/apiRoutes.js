
const friendData = require("../data/friends.js");

// ===========================================
// ================  API ROUTES  =============
// ===========================================

module.exports = function(app){
  //array for input information
  let friendAddedName = []

  //array for images info
  let friendAddedImage = []

app.get("/api/friends", function(req,res){
      res.json(friendData)
})

app.get("/api/github", function(req,res){
      res.redirect("https://github.com/adambatimana/FriendFinder/");
})

    // ====================================
    //            POST REQUEST
    // ====================================

    app.post("/api/friends", function(req, res) {
        let addFriend = req.body;
        friendAddedName = [];
        console.log(addFriend)
        friendData.push(addFriend);
        friendAddedName.push(friendData.name);
        res.json(addFriend);


          //select name from array to push to MODAL ON FRONT END
          for (var i = 0; i < friendData.length; i++) {
            console.log(friendData[i].name);
          }
    });



    // ====================================
    //            LOGIC comparison
    // ====================================





    // ===========================================
    // =========  COMPARE SCORES  ================
    // ===========================================

    //pull information from freinds to compare scores then push match to modal on front endpoint










}//end export module

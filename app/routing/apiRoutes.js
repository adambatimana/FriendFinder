
const friendData = require("../data/friends.js");
const friendMatch  = require("../data/match.js")
// ===========================================
// ================  API ROUTES  =============
// ===========================================

module.exports = function(app){


  //array for images info
  let friendAddedImage = []

  let scoreInt = [];

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
        //array for input information
        let friendAddedName = [];

        //collect and turn scores into numbers
         for (let i = 0; i < addFriend.scores.length; i++) {
             addFriend.scores[i] = parseInt(addFriend.scores[i])
             scoreInt = addFriend.scores[i];
             console.log(scoreInt)
         }

         //push information from .get to FRIENDS
         friendData.push(addFriend);
         res.json(addFriend);
         console.log(addFriend)

        // //name selection
        // friendAddedName.push(friendData.name);
        // console.log(friendAddedName);
        
        // all scores
        const matchScore = friendMatch.map(matchMe => matchMe.scores )
        console.log(matchScore)

        //firstMatch score
        const personOne = friendMatch[0].scores;
        console.log(personOne)
        //if person1 == person2 , match



//{Pseudo Code for finding match}
//In  this example i = number of points in common
        //if person1Score i > 5 = match
        //else == no match


    });



    // ====================================
    //            LOGIC comparison
    // ====================================





    // ===========================================
    // =========  COMPARE SCORES  ================
    // ===========================================

    //pull information from freinds to compare scores then push match to modal on front endpoint










}//end export module

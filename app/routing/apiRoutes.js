
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
            //  console.log(scoreInt)
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


            // ===========================================
            // =========  COMPARE SCORES  ================
            // ===========================================

            //pull information from freinds to compare scores then push match to modal on front endpoint

            const matchOne = friendMatch[0].scores.reduce((a, b) => a + b, 0);
            console.log(matchOne + " Friend One score")

            const matchTwo = friendMatch[1].scores.reduce((a, b) => a + b, 0);
            console.log(matchTwo + " Friend Two score")

            const matchThree = friendMatch[2].scores.reduce((a, b) => a + b, 0);
            console.log(matchThree + " Friend Three score")

            const matchFour = friendMatch[3].scores.reduce((a, b) => a + b, 0);
            console.log(matchFour + " Friend Four score")

            const userTotal = friendData[0].scores.reduce((a,b) => a +b, 0);
            console.log(userTotal+ " User score");


          function checkMatch(friend,user){

            const closeMatch = friend - user;
            console.log("Match difference " + closeMatch)

              if (friend === user)
                  {
                     return true
                  }
              else if (closeMatch > 0 && closeMatch < 2)
                  {
                    return true
                  }
              else
                  {
                    return false
                  }
            }//end checkMatch function

          ;
          //log if match is true or false
          console.log(checkMatch(matchOne,userTotal));
          console.log(checkMatch(matchTwo,userTotal));
          console.log(checkMatch(matchThree,userTotal));
          console.log(checkMatch(matchFour,userTotal));

          // need code to send name and picture link to MODAL to front end, onclick function so the match can pop up in the browser
    });
}//end export module


//{Pseudo Code for finding match}
//In  this example i = number of points in common
    //if person1Score i > 5 = match
    //else == no match

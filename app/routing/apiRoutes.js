
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
            console.log(matchOne)

            const matchTwo = friendMatch[1].scores.reduce((a, b) => a + b, 0);
            console.log(matchTwo)

            const matchThree = friendMatch[2].scores.reduce((a, b) => a + b, 0);
            console.log(matchThree)

            const matchFour = friendMatch[3].scores.reduce((a, b) => a + b, 0);
            console.log(matchFour)

            const userTotal = friendData[0].scores.reduce((a,b) => a +b, 0);
            console.log(userTotal);


          function checkMatch(friend,user){

            const closeMatch = friend - user;
            console.log(closeMatch)

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
          console.log(checkMatch(matchTwo,userTotal));

    });
}//end export module


//{Pseudo Code for finding match}
//In  this example i = number of points in common
    //if person1Score i > 5 = match
    //else == no match

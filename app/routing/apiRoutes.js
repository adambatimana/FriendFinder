
const friendData = ("../data/friends.js");

// ===========================================
// ================  API ROUTES  =============
// ===========================================

module.exports = function(app){


app.get("/api/friends", function(req,res){
      res.json(friendData)
})

app.get("/api/github", function(req,res){
      res.sendFile("https://adambatimana.github.io/FriendFinder/");
})

    // ====================================
    //            POST REQUEST
    // ====================================

    //Recieve data from POST on SURVEY HTML PAGE and Read as JSON
    app.post("/api/friends", function(req, res) {
        let addFriend = req.body;
            friendData.push(addFriend);
            res.json(addFriend)
    });

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










}//end export module

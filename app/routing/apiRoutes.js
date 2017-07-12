
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

}//end export module

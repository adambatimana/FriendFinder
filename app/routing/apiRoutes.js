// ===========================================
// ================  API ROUTES  =============
// ===========================================
function getAPI(){


app.get("/api/:friends?", function(req,res){
  switch(req.params){
    case '/friends':
      res.json(tables)
    break
    case '/github':
        res.sendFile("https://adambatimana.github.io/FriendFinder/");
    break
    default:
        res.sendFile(path.join(__dirname, "404.html"));
    break
  }
})
// ====================================
//            POST REQUEST
// ====================================

app.post("/api/friends", function(req, res) {

  let newTable = req.body;
  console.log(newTable);
  // ====================================
  //            LOGIC
  // ====================================
  if (tables.length < 5) {
      tables.push(newTable);
  }else{
      waitList.push(newTable)
      console.log(waitList);
  }
  res.json(newTable);
});

app.post("/api/friends", function(req, res) {

  let addToFriends = req.body;

  console.log(addToFriends);

  //friendsARRAY.push(addToWait);

  res.json();

});
}
module.exports = getAPI;

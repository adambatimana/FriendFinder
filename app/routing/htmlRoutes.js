// ===========================================
// ================  HTML ROUTES  ============
// ===========================================

getHTML(){

app.get('/:endpoint?', function (req, res) {
  switch (req.params.endpoint) {
    case '/':
    case undefined:
      res.sendFile(path.join(__dirname, "home.html"));
      break
    case 'survey':
      res.sendFile(path.join(__dirname, "survey.html"));
      break
    
    default:
      res.sendFile(path.join(__dirname, "404.html"));
      break
  }
});
}
module.exports = getHTML;

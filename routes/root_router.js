var express = require("express");
var root = express.Router();

root.get('/', function(req, res) {
  res.render("index", {
    nieuws: req.app.get('nieuwsFile').nieuws, // veranderen hoe da je je jsonfile noemt -> nieuw.json file binnen.
    categorieen: req.app.get('categorieenFile').categorieen
  });
});

module.exports = root;

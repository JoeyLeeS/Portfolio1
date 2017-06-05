var express = require("express");
var path = require("path");
var app = express();

app.set('nieuwsFile', require('./config/nieuws.json'));
app.set('categorieenFile', require('./config/categorieen.json'));


app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 5000));

app.get("/contact", function(req, res) {
  res.render("contact");// dit toont de index pagina op dit punt
  });
  app.get("/about", function(req, res) {
    res.render("about");// dit toont de index pagina op dit punt
});

app.use(express.static('public'))

app.use(require("./routes/root_router")); //homepage
app.use(require("./routes/nieuws_router"));
app.use(require("./routes/categorieen_router"));

app.listen(app.get('port'), function() {
  console.log('Node luistert op poort', app.get('port'));
});

module.exports = function (app) {
  //load the controller(s)
  var index = require("../controllers/index.server.controller");
  var display = require("../controllers/display.server.controller");
  var thanks = require("../controllers/thanks.server.controller");

// handle the routing of get and post requests
app.get("/", index.render);

  
//handle the routing of get request to the route
  //by showing the login screen

  app.post("/", function (req, res) {
  //display login page
     index.render(req,res);
  });

  app.post("/display", function (req, res) {
    //display display page
       display.render(req,res);
    });

  app.post("/thanks", function (req, res){
    //display thanks page
    thanks.render(req,res);
  });

};
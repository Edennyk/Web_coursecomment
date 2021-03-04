exports.render = function (req, res) {
  //get user input using request object
  var email = req.body.email;
  //make a reference to the session object
  var session = req.session;
  //store the username in session object
  session.email = email;
  console.log("email in session: " + session.email);

  //check if session object contaions the user email
    session.email
    res.render("index",{
      email:email
    });
};

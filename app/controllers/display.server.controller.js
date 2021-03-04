exports.render = function(req, res){

    var email = req.body.email;
    var session = req.session;
    session.email = email;

    session.email

    res.render("display", {
      email: email,
    });
};
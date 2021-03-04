exports.render = function(req, res){

    var email = req.body.email;
    var comments = req.body.comments;
    var session = req.session;
    
    session.email = email;
    session.comments = comments;

    res.render("thanks", {
        email: email,
        comments: comments
      });
};
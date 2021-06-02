// create a new comment
app.post('/:query/comments', auth.required, function(req, res, next) {
    User.findById(req.payload.id).then(function(user){
      if(!user){ return res.sendStatus(401); }
  
      const comment = new Comment(req.body.comment);
      comment.query  = req.query;
      comment.author = user;
  
      return comment.save().then(function(){
        req.query.comments.push(comment);
  
        return req.query.save().then(function(query) {
          res.json({comment: comment.toJSONFor(user)});
        });
      });
    }).catch(next);
  });
router.post('/:query/like', auth.required, function(req, res, next) {
    const queryId = req.query._id;
   
    User.findById(req.payload.id).then(function(user){
     if (!user) { return res.sendStatus(401); }
   
     return user.like(queryId).then(function(){
      return req.query.updateLikeCount().then(function(query){
       return res.json({query: query.toJSONFor(user)});
      });
     });
    }).catch(next);
   });
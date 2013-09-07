exports.list = function(req, res) {
  res.json([{
    name: 'Warzone 2100',
    imageUrl: 'http://main.makeuseoflimited.netdna-cdn.com/wp-content/uploads/2010/10/wz2100.jpe',
    author: 'some author',
    user: 'name'
  }]);
};

exports.add = function(req, res) {
  var gam_instance = global.db.Game.build({
    name:         req.body.name,
    author:       req.body.author,
    imageUrl:     req.body.imageUrl,
    downloadLink: req.body.downloadLink,
    platform:     req.body.platform,
    description:  req.body.description,
    //dateCreation: req.body.dateCreation
  });
  game_instance.save().success(function() {
    res.redirect("/game/list");
  }).error(function(err) {
    res.send("error");
  });
};

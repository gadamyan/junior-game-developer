exports.list = function(req, res) {
  global.db.game.findAll().success(function(games) {
    var games_json = [];
    games.forEach(function(game) {
      games_json.push({
        name:         game.name,
        author:       game.author,
        imageUrl:     game.imageUrl,
        downloadLink: game.downloadLink,
        platform:     game.platform,
        description:  game.description,
        //dateCreation: req.body.dateCreation
      });
    });
    res.send(games_json);
  }).error(function(err) {
    console.log(err);
    response.send(err);
  });
};

exports.add = function(req, res) {
  var obj = {
    name:         req.body.name,
    author:       req.body.author,
    imageUrl:     req.body.imageUrl,
    downloadLink: req.body.downloadLink,
    platform:     req.body.platform,
    description:  req.body.description,
    //dateCreation: req.body.dateCreation
  };
  var game_instance = global.db.game.build(obj);
  game_instance.save().success(function() {
    res.redirect("/game/list");
  }).error(function(err) {
    res.send(err);
  });
};

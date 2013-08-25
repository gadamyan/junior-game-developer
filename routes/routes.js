/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html', { title: '' });
};

exports.games = function(req, res) {
  res.render('games.html', { title: 'New Games:', data: {} });
};

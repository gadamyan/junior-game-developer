
exports.list = function(req, res) {
  res.render('gameList.html', { title: 'New Games:', data: {} });
};

exports.add = function(req, res) {
  res.render('gameAdd.html', { title: 'New Games:', data: {} });
};

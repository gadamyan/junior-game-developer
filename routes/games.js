/*
 * GET users listing.
 */

exports.list = function(req, res) {
  res.render('games.html', { title: 'New Games:', data: {} });
};

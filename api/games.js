exports.games = function(req, res) {
  res.json([{
    name: 'Warzone 2100',
    imageUrl: 'http://main.makeuseoflimited.netdna-cdn.com/wp-content/uploads/2010/10/wz2100.jpe',
    author: 'some author',
    user: 'name'
  }]);
};

var createModules = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    name: {type: DataTypes.STRING(255), allowNull: false},
    email: {type: DataTypes.STRING(255), allowNull: false},
    birthday: {type: DataTypes.DATE, allowNull: false}
  });

  var Game = sequelize.define("game", {
    name: {type: DataTypes.STRING(255), allowNull: false},
    author: {type: DataTypes.STRING(255), allowNull: false},
    image_url: {type: DataTypes.STRING(255), allowNull: false},
    data_creation: {type: DataTypes.DATE, allowNull: false}
  }).hasOne(User);

  global.db['user'] = User;
  global.db['game'] = Game;
};


if (!global.hasOwnProperty('db')) {
    var Sequelize = require('sequelize');
    var sq = null;
    if (process.env.DATABASE_URL) {
        /* Remote database
           Do `heroku config` for details. We will be parsing a connection
           string of the form:
           postgres://bucsqywelrjenr:ffGhjpe9dR13uL7anYjuk3qzXo@\
           ec2-54-221-204-17.compute-1.amazonaws.com:5432/d4cftmgjmremg1
        */
        var pgregex = /postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/;
        var match = process.env.DATABASE_URL.match(pgregex);
        var user = match[1];
        var password = match[2];
        var host = match[3];
        var port = match[4];
        var dbname = match[5];
        var config =  {
            dialect:  'postgres',
            protocol: 'postgres',
            port:     port,
            host:     host,
            logging:  true //false
        };
        sq = new Sequelize(dbname, user, password, config);
    } else {
        /* Local database
           We parse the .pgpass file for the connection string parameters.
        */
        var fs = require('fs');
        var PGPASS_FILE = '.pgpass';
        var pgtokens = fs.readFileSync(PGPASS_FILE).toString().split(':');
        var host = pgtokens[0];
        var port = pgtokens[1];
        var dbname = pgtokens[2];
        var user = pgtokens[3];
        var password = pgtokens[4];
        var config =  {
            dialect:  'postgres',
            protocol: 'postgres',
            port:     port,
            host:     host,
            sync:     { force: true }
        };
        var sq = new Sequelize(dbname, user, password, config);
    }
    global.db = {
        Sequelize: Sequelize,
        sequelize: sq,
        //order: sq.import(__dirname + '/order')
    };
    createModules(sq, Sequelize);
}
module.exports = global.db;

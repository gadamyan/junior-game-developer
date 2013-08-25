/**
 * Game.js jQuery Adapter
 * @author Gevorg Adamyan <gevorg.ad@gmail.com>
 * @copyright 2013 Gevorg Adamyan <gevorg.ad@gmail.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

var Game;

(function ($) {

  "use strict";

  // constructor
  var _Game = function() {
  };

  _Game.prototype = {
    constructor: _Game,

    list: function() {
      var self = this;
      $.ajax({
        url: '/api/game/list/',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
          self.addGames(data);
        },
        //statusCode: status
      });
    },

    addGames: function(data) {
      var game_list = $('#games-list');
      var game_template = $('script#game-template').tmpl({});
      game_list.append(game_template);
    }
  }

  $(function() {
    /*jshint newcap:false */  
    Game = new _Game();
    /*jshint newcap:true */  
  });

})(jQuery); 

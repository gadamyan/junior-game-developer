/**
 * game.js jQuery Adapter
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

    game_list: function(fn) {
      var self = this;
      $.ajax({
        url: '/api/game/list/',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
          if ('undefined' !== typeof fn) {
            fn.apply(self, [data]);
          }
        },
        //statusCode: status
      });
    },

    list: function() {
      this.game_list(function(data) {
        var game_list = $('#games-list');
        var game_template = $('script#game-template').tmpl(data);
        game_list.append(game_template);
      });
    }
  }

  $(function() {
    /*jshint newcap:false */  
    Game = new _Game();
    /*jshint newcap:true */  
  });

})(jQuery); 

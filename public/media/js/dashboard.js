/**
 * dashboard.js jQuery Adapter
 * @author Gevorg Adamyan <gevorg.ad@gmail.com>
 * @copyright 2013 Gevorg Adamyan <gevorg.ad@gmail.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

var Dashboard;

(function ($) {

  "use strict";

  // constructor
  var _Dashboard = function() {
  };

  _Dashboard.prototype = {
    constructor: _Dashboard,

    init: function(data) {
      Game.game_list(function(data) {
        var game_list = $('#games-list');
        var game_template = $('script#game-template').tmpl(data);
        game_list.append(game_template);
      });
    }
  }

  $(function() {
    /*jshint newcap:false */  
    Dashboard = new _Dashboard();
    /*jshint newcap:true */  
  });

})(jQuery); 

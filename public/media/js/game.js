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
    },

    add: function() {
      var self = this,
          form = $('#add-game-form'),
          addButton = form.find('.btn-success');

      addButton.click(function() {
        var form = $('#add-game-form'),
            name = form.find('[name = name]'),
            author = form.find('[name = author]'),
            imageUrl = form.find('[name = imageUrl]'),
            downloadLink = form.find('[name = downloadLink]'),
            platform = form.find('[name = platform]'),
            description = form.find('[name = description]');
        var post = {
          name: name.val(),
          author: author.val(),
          imageUrl: imageUrl.val(),
          downloadLink: downloadLink.val(),
          platform: platform.val(),
          description: description.val()
        };
        self.game_add(post, function(data) {
          location.replace('/game/list/');
        });
      });
    },

    game_add: function(post, fn) {
      $.ajax({
        url: '/api/game/add/',
        type: 'POST',
        dataType: 'json',
        data: JSON.stringify(post),
        contentType: 'application/json',
        processData: false,
        success: function(data) {
          if ('undefined' !== typeof fn) {
            fn.apply(self, [data]);
          }
        },
        //statusCode: status
      });
    }
  }

  $(function() {
    /*jshint newcap:false */  
    Game = new _Game();
    /*jshint newcap:true */  
  });

})(jQuery); 

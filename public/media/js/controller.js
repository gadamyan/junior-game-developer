/**
 * Controller.js jQuery Adapter
 * @author Gevorg Adamyan <gevorg.ad@gmail.com>
 * @copyright 2013 Gevorg Adamyan <gevorg.ad@gmail.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

var Controller;

(function ($) {

  "use strict";

  // constructor
  var _Controller = function() {
    this.init();
  };
  _Controller.prototype = {
    constructor: _Controller,

    init: function() {
      var page = History.getHashByState(),
          v = page.split('/'),
          action = '';
      if ("" == v[0]) {
        v.splice(0, 1);
      }
      if ("" == v[v.length - 1]) {
        v.splice(v.length - 1);
      }
      if (v.length > 0) {
        action = v[0] + v[1].substr(0, 1).toUpperCase()
               + v[1].substr(1) + "Action";
        if ("undefined" != typeof this[action]) {
          if (v.length > 2) {
            this[action].apply(this, v.slice(2));
          } else {
            this[action]();
          }
        }
      } else {
        this.indexAjaxAction();
      }
    },

    indexAjaxAction: function() {
      Dashboard.init();
    },

    gameListAction: function() {
      Game.list();
    }
  }

  $(function() {
    /*jshint newcap:false */  
    Controller = new _Controller();
    /*jshint newcap:true */  
  });

})(jQuery); 

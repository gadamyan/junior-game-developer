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
      var page = History.getHash(),
          v = page.split('/'),
          action = '';
      if ("" == v[v.length - 1]) {
        v.splice(v.length - 1);
      }
      if (v.length > 0) {
        action = v[0] + v[1].substr(0, 1).toUpperCase()
               + v[1].substr(1) + "Action";
        if ("undefined" != typeof Controller[action]) {
          if (v.length > 2) {
            Controller[action].apply(Controller, v.slice(2));
          } else {
            Controller[action]();
          }
        }
      }
    },

    indexAjaxAction: function() {
    }
  }

  $(function() {
    /*jshint newcap:false */  
    Controller = new _Controller();
    /*jshint newcap:true */  
  });

})(jQuery); 

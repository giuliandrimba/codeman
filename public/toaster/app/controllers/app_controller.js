(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.controllers').AppController = (function(_super) {

    __extends(AppController, _super);

    function AppController() {
      return AppController.__super__.constructor.apply(this, arguments);
    }

    return AppController;

  })(theoricus.mvc.Controller);

}).call(this);

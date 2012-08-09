(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.controllers').MainController = (function(_super) {

    __extends(MainController, _super);

    function MainController() {
      return MainController.__super__.constructor.apply(this, arguments);
    }

    return MainController;

  })(app.controllers.AppController);

}).call(this);

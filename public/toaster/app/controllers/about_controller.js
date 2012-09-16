(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.controllers').AboutController = (function(_super) {
    var AboutModel;

    __extends(AboutController, _super);

    function AboutController() {
      return AboutController.__super__.constructor.apply(this, arguments);
    }

    AboutModel = app.models.AboutModel;

    AboutController.prototype.index = function() {
      var _this = this;
      return AboutModel.load(function() {
        return _this.render("index", {
          data: AboutModel.first()
        });
      });
    };

    return AboutController;

  })(app.controllers.AppController);

}).call(this);

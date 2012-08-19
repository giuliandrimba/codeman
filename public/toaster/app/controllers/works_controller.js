(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.controllers').WorksController = (function(_super) {

    __extends(WorksController, _super);

    function WorksController() {
      return WorksController.__super__.constructor.apply(this, arguments);
    }

    WorksController.prototype.index = function() {
      this.data = [1, 2, 3, 4, 5, 6, 7, 8];
      return this.render("index", {
        data: this.data
      });
    };

    return WorksController;

  })(app.controllers.AppController);

}).call(this);

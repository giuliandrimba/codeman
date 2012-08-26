(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.controllers').WorksController = (function(_super) {
    var WorksModel;

    __extends(WorksController, _super);

    function WorksController() {
      return WorksController.__super__.constructor.apply(this, arguments);
    }

    WorksModel = app.models.WorksModel;

    WorksController.prototype.index = function() {
      var _this = this;
      this.data = [1, 2, 3, 4, 5, 6, 7, 8];
      return WorksModel.load(function() {
        console.log(WorksModel.all());
        return _this.render("index", {
          data: WorksModel.all()
        });
      });
    };

    WorksController.prototype.show = function() {
      return this.render("show", {});
    };

    return WorksController;

  })(app.controllers.AppController);

}).call(this);

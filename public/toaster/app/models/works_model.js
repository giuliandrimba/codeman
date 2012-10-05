(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.models').WorksModel = (function(_super) {

    __extends(WorksModel, _super);

    function WorksModel() {
      this.load = __bind(this.load, this);
      return WorksModel.__super__.constructor.apply(this, arguments);
    }

    WorksModel.service_url = "http://codeman-admin.herokuapp.com/services/works/giuliandrimba";

    WorksModel.prototype.load = function() {
      WorksModel.__super__.load.call(this);
      return $("#preloader").css("display", "block");
    };

    return WorksModel;

  })(app.models.AppModel);

}).call(this);

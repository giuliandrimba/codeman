(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.models').WorksModel = (function(_super) {

    __extends(WorksModel, _super);

    function WorksModel() {
      return WorksModel.__super__.constructor.apply(this, arguments);
    }

    return WorksModel;

  })(app.models.AppModel);

}).call(this);

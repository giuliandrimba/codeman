(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.models').MainModel = (function(_super) {

    __extends(MainModel, _super);

    function MainModel() {
      return MainModel.__super__.constructor.apply(this, arguments);
    }

    return MainModel;

  })(app.models.AppModel);

}).call(this);

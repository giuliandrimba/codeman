(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.models').AboutModel = (function(_super) {

    __extends(AboutModel, _super);

    function AboutModel() {
      return AboutModel.__super__.constructor.apply(this, arguments);
    }

    AboutModel.service_url = "http://codeman-admin.herokuapp.com/services/profile/giuliandrimba";

    AboutModel.after_load = function(data) {
      return this["new"](data);
    };

    return AboutModel;

  })(app.models.AppModel);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.views.works').ShowView = (function(_super) {

    __extends(ShowView, _super);

    function ShowView() {
      return ShowView.__super__.constructor.apply(this, arguments);
    }

    ShowView.prototype["in"] = function(done) {
      return typeof done === "function" ? done() : void 0;
    };

    ShowView.prototype.out = function(done) {
      return typeof done === "function" ? done() : void 0;
    };

    return ShowView;

  })(app.views.AppView);

}).call(this);

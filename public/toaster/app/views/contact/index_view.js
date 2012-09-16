(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.views.contact').IndexView = (function(_super) {

    __extends(IndexView, _super);

    function IndexView() {
      return IndexView.__super__.constructor.apply(this, arguments);
    }

    IndexView.prototype["in"] = function(done) {
      return typeof done === "function" ? done() : void 0;
    };

    IndexView.prototype.out = function(done) {
      return typeof done === "function" ? done() : void 0;
    };

    return IndexView;

  })(app.views.AppView);

}).call(this);

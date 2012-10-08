(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.views.about').IndexView = (function(_super) {

    __extends(IndexView, _super);

    function IndexView() {
      return IndexView.__super__.constructor.apply(this, arguments);
    }

    IndexView.prototype.before_in = function() {
      this.el.find(".description").html(this.data.data.description);
      return this.el.css({
        opacity: 0
      });
    };

    IndexView.prototype["in"] = function(done) {
      var _this = this;
      IndexView.__super__["in"].call(this);
      this.before_in();
      return TweenLite.to(this.el, 0.5, {
        css: {
          opacity: 1
        },
        ease: Quad.easeOut,
        onComplete: function() {
          return typeof done === "function" ? done() : void 0;
        }
      });
    };

    IndexView.prototype.out = function(done) {
      var _this = this;
      return TweenLite.to(this.el, 0.5, {
        css: {
          opacity: 0
        },
        ease: Quad.easeOut,
        onComplete: function() {
          return typeof done === "function" ? done() : void 0;
        }
      });
    };

    return IndexView;

  })(app.views.AppView);

}).call(this);

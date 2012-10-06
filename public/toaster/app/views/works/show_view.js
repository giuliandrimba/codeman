(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.views.works').ShowView = (function(_super) {
    var Gallery;

    __extends(ShowView, _super);

    function ShowView() {
      return ShowView.__super__.constructor.apply(this, arguments);
    }

    Gallery = app.ui.gallery.Gallery;

    ShowView.prototype.before_in = function() {
      var gallery;
      gallery = new Gallery($(".works_gallery"), this.data.data.id);
      return this.el.css({
        opacity: 0
      });
    };

    ShowView.prototype["in"] = function(done) {
      var _this = this;
      ShowView.__super__["in"].call(this);
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

    ShowView.prototype.out = function(done) {
      return typeof done === "function" ? done() : void 0;
    };

    return ShowView;

  })(app.views.AppView);

}).call(this);

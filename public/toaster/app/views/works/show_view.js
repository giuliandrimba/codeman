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

    ShowView.prototype.set_triggers = function() {
      var _this = this;
      this.mark_menu("bt_work");
      return this.el.find(".back").click(function(ev) {
        _this.navigate($(ev.currentTarget).attr("href"));
        if (!_this.the.config.no_push_state) {
          return ev.preventDefault();
        }
      });
    };

    ShowView.prototype.before_in = function() {
      var gallery;
      _gaq.push(["_trackEvent", "works", "enter", "work_" + this.data.data.id]);
      gallery = new Gallery($(".works_gallery"), this.data.data.id);
      return this.el.css({
        opacity: 0
      });
    };

    ShowView.prototype["in"] = function(done) {
      var _this = this;
      this.el.find(".description").html(this.data.data.description);
      this.update_scroll();
      ShowView.__super__["in"].call(this);
      this.before_in();
      return TweenLite.to(this.el, 0.5, {
        css: {
          opacity: 1
        },
        ease: Expo.easeOut,
        onComplete: function() {
          return typeof done === "function" ? done() : void 0;
        }
      });
    };

    ShowView.prototype.out = function(done) {
      var _this = this;
      return TweenLite.to(this.el, 0.5, {
        css: {
          opacity: 0
        },
        ease: Expo.easeOut,
        onComplete: function() {
          return typeof done === "function" ? done() : void 0;
        }
      });
    };

    return ShowView;

  })(app.views.AppView);

}).call(this);

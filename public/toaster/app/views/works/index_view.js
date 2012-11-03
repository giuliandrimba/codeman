(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.views.works').IndexView = (function(_super) {

    __extends(IndexView, _super);

    function IndexView() {
      return IndexView.__super__.constructor.apply(this, arguments);
    }

    IndexView.prototype.before_in = function() {
      var rndTop, thumb, _i, _len, _ref;
      this.thumbs = $(this.el).find(".thumb_list li .project_thumb");
      this._total_thumbs = this.thumbs.length;
      this._thumbs_loaded = 0;
      this.el.css({
        opacity: 1
      });
      _ref = this.thumbs;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        thumb = _ref[_i];
        rndTop = (Math.random() * 100) + 100;
        $(thumb).css("top", "" + rndTop + "px");
      }
      return this.preloader.show();
    };

    IndexView.prototype.set_triggers = function() {
      var _this = this;
      this.mark_menu("bt_work");
      return this.el.find("a").click(function(ev) {
        _this.navigate($(ev.currentTarget).attr("href"));
        if (!_this.the.config.no_push_state) {
          return ev.preventDefault();
        }
      });
    };

    IndexView.prototype.load = function(done) {
      var _this = this;
      return this.thumbs.find("img").load((function() {
        _this._thumbs_loaded++;
        if (_this._thumbs_loaded >= _this._total_thumbs) {
          return typeof done === "function" ? done() : void 0;
        }
      }));
    };

    IndexView.prototype["in"] = function(done) {
      var _this = this;
      IndexView.__super__["in"].call(this);
      this.update_scroll();
      this.before_in();
      return this.load(function() {
        var delay, i, thumb, time, _i, _len, _ref;
        _this.preloader.hide();
        delay = 0;
        time = 0.5;
        _ref = _this.thumbs;
        for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
          thumb = _ref[i];
          delay += .05;
          time += .06;
          TweenLite.to($(thumb), time, {
            css: {
              opacity: 1,
              top: 0,
              left: 0
            },
            delay: delay,
            ease: Quad.easeOut
          });
        }
        return typeof done === "function" ? done() : void 0;
      });
    };

    IndexView.prototype.out = function(done) {
      var delay, i, thumb, time, _i, _len, _ref,
        _this = this;
      delay = 0;
      time = 0.5;
      _ref = this.thumbs;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        thumb = _ref[i];
        delay += .05;
        time += .06;
        TweenLite.to($(thumb), time, {
          css: {
            opacity: 0,
            top: 150,
            left: 0
          },
          delay: delay,
          ease: Quad.easeOut
        });
      }
      return setTimeout((function() {
        return typeof done === "function" ? done() : void 0;
      }), time * 1000);
    };

    return IndexView;

  })(app.views.AppView);

}).call(this);

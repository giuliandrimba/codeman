(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.views.main').IndexView = (function(_super) {
    var Header, Menu;

    __extends(IndexView, _super);

    function IndexView() {
      this.on_header_ready = __bind(this.on_header_ready, this);

      this["in"] = __bind(this["in"], this);
      return IndexView.__super__.constructor.apply(this, arguments);
    }

    Header = app.ui.header.Header;

    Menu = app.ui.menu.Menu;

    IndexView.prototype.set_triggers = function() {
      var _this = this;
      return $(window).resize((function() {
        $(".wrapper").find(".viewport").height(window.height());
        return $(".wrapper").tinyscrollbar_update();
      }));
    };

    IndexView.prototype["in"] = function(done) {
      var _this = this;
      this.header = new Header("header_canvas");
      this.header.ready.add(this.on_header_ready);
      this.header["in"]();
      this.menu = new Menu("#menu");
      $('.wrapper').tinyscrollbar();
      return this.menu.showed.add(function() {
        return typeof done === "function" ? done() : void 0;
      });
    };

    IndexView.prototype.on_header_ready = function() {
      return this.menu["in"]();
    };

    IndexView.prototype.out = function(done) {
      return typeof done === "function" ? done() : void 0;
    };

    return IndexView;

  })(app.views.AppView);

}).call(this);

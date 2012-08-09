(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.ui.header.els').Logo = (function(_super) {

    __extends(Logo, _super);

    Logo.prototype.url = "/animations/header/logo.json";

    function Logo() {
      Logo.__super__.constructor.call(this);
    }

    Logo.prototype["in"] = function(callback) {
      this.stage.addChild(this);
      this.y = 50;
      this.x = 105;
      return this.gotoAndPlay("intro");
    };

    return Logo;

  })(app.ui.header.els.base.AnimEl);

}).call(this);

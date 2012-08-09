(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.ui.header.els').SplatterLogo = (function(_super) {

    __extends(SplatterLogo, _super);

    SplatterLogo.prototype.url = "/animations/header/splatter_logo.json";

    function SplatterLogo() {
      SplatterLogo.__super__.constructor.call(this);
    }

    SplatterLogo.prototype["in"] = function() {
      this.stage.addChild(this);
      this.y = 0;
      return this.gotoAndPlay("intro");
    };

    return SplatterLogo;

  })(app.ui.header.els.base.AnimEl);

}).call(this);

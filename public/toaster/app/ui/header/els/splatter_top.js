(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.ui.header.els').SplatterTop = (function(_super) {

    __extends(SplatterTop, _super);

    SplatterTop.prototype.url = "/animations/header/bg-header-topright.json";

    function SplatterTop(spritesheet) {
      SplatterTop.__super__.constructor.call(this);
    }

    SplatterTop.prototype["in"] = function() {
      this.stage.addChild(this);
      this.y = 0;
      this.x = 660;
      return this.gotoAndPlay("intro");
    };

    return SplatterTop;

  })(app.ui.header.els.base.AnimEl);

}).call(this);

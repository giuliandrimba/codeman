(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.ui.header.els').LogoLabel = (function(_super) {

    __extends(LogoLabel, _super);

    LogoLabel.prototype.url = "/images/header/logo-text.png";

    function LogoLabel() {
      LogoLabel.__super__.constructor.call(this);
    }

    LogoLabel.prototype["in"] = function() {
      this.stage.addChild(this);
      this.alpha = 0;
      this.x = 209;
      this.y = 100;
      TweenLite.to(this, .5, {
        alpha: 1,
        ease: Quad.easeOut,
        delay: 1.3
      });
      return this._done();
    };

    return LogoLabel;

  })(app.ui.header.els.base.BitmapEl);

}).call(this);

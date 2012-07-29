(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.components.header.els').Logo = (function(_super) {

    __extends(Logo, _super);

    function Logo(img) {
      this.initialize(img);
      this.y = 50;
      this.x = 105;
      this.onAnimationEnd = function(anim, name) {
        anim.paused = true;
        anim.currentAnimationFrame = anim.spriteSheet.getNumFrames() - 1;
        return typeof this.callback === "function" ? this.callback() : void 0;
      };
    }

    Logo.prototype["in"] = function(callback) {
      this.callback = callback;
      return this.gotoAndPlay("intro");
    };

    return Logo;

  })(BitmapAnimation);

}).call(this);

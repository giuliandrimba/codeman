(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.components.header.els').SplatterTop = (function(_super) {

    __extends(SplatterTop, _super);

    function SplatterTop(spritesheet) {
      this.initialize(spritesheet);
      this.y = 0;
      this.x = 660;
      this.onAnimationEnd = function(anim, name) {
        anim.paused = true;
        anim.currentAnimationFrame = anim.spriteSheet.getNumFrames() - 1;
        return typeof this.callback === "function" ? this.callback() : void 0;
      };
    }

    SplatterTop.prototype["in"] = function(callback) {
      this.callback = callback;
      return this.gotoAndPlay("intro");
    };

    return SplatterTop;

  })(BitmapAnimation);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.components.header.els').Brain = (function(_super) {

    __extends(Brain, _super);

    function Brain(spritesheet) {
      var interval,
        _this = this;
      this.initialize(spritesheet);
      this.x = 177;
      this.y = 90;
      interval = setInterval((function() {
        return _this.blink();
      }), 5000);
      this.onAnimationEnd = function(anim, name) {
        anim.paused = true;
        anim.currentAnimationFrame = anim.spriteSheet.getNumFrames() - 1;
        return typeof this.callback === "function" ? this.callback() : void 0;
      };
    }

    Brain.prototype["in"] = function(callback) {
      this.callback = callback;
      return this.gotoAndStop(1);
    };

    Brain.prototype.blink = function() {
      return this.gotoAndPlay("blink");
    };

    return Brain;

  })(BitmapAnimation);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.ui.header.els').Brain = (function(_super) {

    __extends(Brain, _super);

    Brain.prototype.url = "/animations/header/brain.json";

    function Brain() {
      Brain.__super__.constructor.call(this);
    }

    Brain.prototype["in"] = function() {
      var interval,
        _this = this;
      this.stage.addChild(this);
      this.alpha = 0;
      this.x = 177;
      this.y = 90;
      this.gotoAndStop(1);
      TweenLite.to(this, .5, {
        alpha: 1,
        ease: Quad.easeOut,
        delay: 1
      });
      this.onAnimationEnd = function(anim, name) {
        anim.paused = true;
        return anim.currentAnimationFrame = anim.spriteSheet.getNumFrames() - 1;
      };
      interval = setInterval((function() {
        return _this.gotoAndPlay("blink");
      }), 20000);
      return this._done();
    };

    return Brain;

  })(app.ui.header.els.base.AnimEl);

}).call(this);

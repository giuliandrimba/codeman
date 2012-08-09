(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.ui.header.els.base').AnimEl = (function(_super) {

    __extends(AnimEl, _super);

    function AnimEl() {
      this.init = __bind(this.init, this);
      this.ready = new signals.Signal;
      this.showed = new signals.Signal;
      this.stage = null;
      this.onAnimationEnd = function(anim, name) {
        anim.paused = true;
        anim.currentAnimationFrame = anim.spriteSheet.getNumFrames() - 1;
        return this._done();
      };
    }

    AnimEl.prototype["in"] = function() {
      return this.stage.addChild(this);
    };

    AnimEl.prototype.init = function() {
      var _this = this;
      return load_json(this.url, function(data) {
        var spritesheet;
        spritesheet = new SpriteSheet(data);
        _this.initialize(spritesheet);
        return _this.ready.dispatch();
      });
    };

    AnimEl.prototype._done = function() {
      this.stage.update();
      return this.showed.dispatch();
    };

    return AnimEl;

  })(BitmapAnimation);

}).call(this);

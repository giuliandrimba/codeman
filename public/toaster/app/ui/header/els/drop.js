(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.ui.header.els').Drop = (function(_super) {
    var BitmapEl, img, img_bg;

    __extends(Drop, _super);

    BitmapEl = app.ui.header.els.base.BitmapEl;

    img = "/images/header/drop.png";

    img_bg = "/images/header/drop-bg.png";

    Drop.prototype.angle = 1.1;

    Drop.prototype.old_dist = 0;

    function Drop(x, y, scale, stage) {
      this._asset_ready = __bind(this._asset_ready, this);

      this._animDrop = __bind(this._animDrop, this);

      this._animDropTicker = __bind(this._animDropTicker, this);
      this.stage = stage;
      this.x = x;
      this.y = y;
      this.scale = scale;
      this.assets = 2;
      Drop.__super__.constructor.call(this);
      this._assets_ready = 0;
      this.drop_bg = new BitmapEl;
      this.drop_bg.url = img_bg;
      this.drop_bg.ready.add(this._asset_ready);
      this.drop = new BitmapEl;
      this.drop.url = img;
      this.drop.ready.add(this._asset_ready);
    }

    Drop.prototype.init = function() {
      this.drop.init();
      return this.drop_bg.init();
    };

    Drop.prototype["in"] = function() {
      var _delay;
      _delay = (Math.random() * .7) + 1.3;
      this.stage.addChild(this.drop_bg);
      this.drop_bg.alpha = 0;
      this.drop_bg.x = this.x + 5;
      this.drop_bg.y = this.y - 15;
      this.drop_bg.scaleX = this.drop_bg.scaleY = this.scale;
      TweenLite.to(this.drop_bg, .5, {
        alpha: 1,
        y: this.y + 10,
        ease: Quad.easeOut,
        delay: _delay
      });
      this.stage.addChild(this.drop);
      this.drop.alpha = 0;
      this.drop.x = this.x;
      this.drop.y = this.y - 15;
      this.drop.scaleX = this.drop.scaleY = this.scale;
      TweenLite.to(this.drop, .5, {
        alpha: 1,
        y: this.y + 5,
        ease: Quad.easeOut,
        delay: _delay,
        onComplete: this._animDropTicker
      });
      return this._done();
    };

    Drop.prototype._animDropTicker = function() {
      return Ticker.addListener(this._animDrop);
    };

    Drop.prototype._animDrop = function() {
      this.drop.y = this.y + (Math.sin(this.angle) * 5);
      this.drop_bg.y = (this.y + 5) + (Math.sin(this.angle) * 5);
      return this.angle += .1;
    };

    Drop.prototype._asset_ready = function() {
      this._assets_ready += 1;
      if (this._assets_ready === this.assets) {
        return this.ready.dispatch();
      }
    };

    return Drop;

  })(app.ui.header.els.base.BitmapEl);

}).call(this);

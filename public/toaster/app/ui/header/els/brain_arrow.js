(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.ui.header.els').BrainArrow = (function(_super) {

    __extends(BrainArrow, _super);

    BrainArrow.prototype.url = "/images/header/brain-arrow.png";

    function BrainArrow() {
      BrainArrow.__super__.constructor.call(this);
    }

    BrainArrow.prototype["in"] = function() {
      this.stage.addChild(this);
      this.alpha = 0;
      this.x = 190;
      this.y = 66;
      TweenLite.to(this, .5, {
        alpha: 1,
        ease: Quad.easeOut,
        delay: 1
      });
      return this._done();
    };

    return BrainArrow;

  })(app.ui.header.els.base.BitmapEl);

}).call(this);

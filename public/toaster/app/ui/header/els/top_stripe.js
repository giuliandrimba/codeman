(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.ui.header.els').TopStripe = (function(_super) {

    __extends(TopStripe, _super);

    TopStripe.prototype.url = "/images/header/top-stripe.png";

    function TopStripe() {
      TopStripe.__super__.constructor.call(this);
    }

    TopStripe.prototype["in"] = function() {
      this.stage.addChild(this);
      this.x = 100;
      this.alpha = 0;
      TweenLite.to(this, .5, {
        alpha: 1,
        ease: Quad.easeOut
      });
      return this._done();
    };

    return TopStripe;

  })(app.ui.header.els.base.BitmapEl);

}).call(this);

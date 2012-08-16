(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.ui.header.els').Quote = (function(_super) {

    __extends(Quote, _super);

    Quote.prototype.url = "/images/header/quote-flag.png";

    function Quote() {
      Quote.__super__.constructor.call(this);
    }

    Quote.prototype["in"] = function() {
      this.stage.addChild(this);
      this.alpha = 0;
      this.x = 870;
      this.y = -300;
      TweenLite.to(this, 3.5, {
        alpha: 1,
        y: 0,
        ease: Quart.easeInOut,
        delay: 2
      });
      return this._done();
    };

    return Quote;

  })(app.ui.header.els.base.BitmapEl);

}).call(this);

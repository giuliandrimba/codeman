(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.components.header.els').TopStripe = (function(_super) {

    __extends(TopStripe, _super);

    function TopStripe(img) {
      this.initialize(img);
      this.x = 100;
      this.alpha = 0;
    }

    TopStripe.prototype["in"] = function(callback) {
      return Tween.get(this).to({
        alpha: 1
      }, 500, Ease.quadOut);
    };

    return TopStripe;

  })(Bitmap);

}).call(this);

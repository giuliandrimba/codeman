(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.components.header.els').Background = (function(_super) {

    __extends(Background, _super);

    function Background(img) {
      this.initialize(img);
      this.alpha = 0;
    }

    Background.prototype["in"] = function(callback) {
      return Tween.get(this).to({
        alpha: 1
      }, 1000, Ease.quadOut);
    };

    return Background;

  })(Bitmap);

}).call(this);

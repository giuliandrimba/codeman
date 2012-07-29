(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.components.header.els').BrainArrow = (function(_super) {

    __extends(BrainArrow, _super);

    function BrainArrow(img) {
      this.initialize(img);
      this.x = 190;
      this.y = 66;
    }

    BrainArrow.prototype["in"] = function(callback) {
      return Tween.get(this).to({
        alpha: 1
      }, 1000, Ease.quadOut);
    };

    return BrainArrow;

  })(Bitmap);

}).call(this);

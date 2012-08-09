(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.ui.header.els').Background = (function(_super) {

    __extends(Background, _super);

    Background.prototype.url = "/images/header/bg-header.jpg";

    function Background() {
      Background.__super__.constructor.call(this);
    }

    Background.prototype["in"] = function(callback) {
      this.stage.addChild(this);
      this.alpha = 0;
      Tween.get(this).to({
        alpha: 1
      }, 1000, Ease.quadOut);
      return this._done();
    };

    return Background;

  })(app.ui.header.els.base.BitmapEl);

}).call(this);

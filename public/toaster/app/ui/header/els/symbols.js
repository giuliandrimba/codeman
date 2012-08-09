(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.ui.header.els').Symbols = (function(_super) {

    __extends(Symbols, _super);

    Symbols.prototype.url = "/images/header/symbols.png";

    function Symbols() {
      Symbols.__super__.constructor.call(this);
    }

    Symbols.prototype["in"] = function() {
      this.stage.addChild(this);
      this.alpha = 0;
      this.x = 650;
      this.y = 10;
      Tween.get(this).wait(1000).to({
        alpha: 1
      }, 500, Ease.quadOut);
      return this._done();
    };

    return Symbols;

  })(app.ui.header.els.base.BitmapEl);

}).call(this);

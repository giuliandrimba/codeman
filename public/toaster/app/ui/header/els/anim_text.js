(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.ui.header.els').AnimText = (function(_super) {
    var AnimLetter, numbers, text_letters, _added;

    __extends(AnimText, _super);

    AnimLetter = app.ui.header.els.AnimLetter;

    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    text_letters = [];

    AnimText.prototype.current = 0;

    AnimText.prototype.total = 0;

    _added = false;

    function AnimText(text, color, x, y) {
      var letter, _i, _len;
      AnimText.__super__.constructor.call(this);
      this.x = x;
      this.y = y;
      this.initialize(text, "12px OCRAStdRegular", color);
      this.text = "";
      this.anim_letters = [];
      for (_i = 0, _len = text.length; _i < _len; _i++) {
        letter = text[_i];
        this.anim_letters.push(new AnimLetter(letter));
      }
      this.total = this.anim_letters.length;
    }

    AnimText.prototype["in"] = function() {
      var delay,
        _this = this;
      delay = (Math.random() * 700) + 1800;
      this.stage.addChild(this);
      setTimeout((function() {
        return _this.tween();
      }), delay);
      return this._done();
    };

    AnimText.prototype.tween = function(done) {
      var _this = this;
      return this.anim_letters[this.current].tween(this, 10).on_complete = function() {
        _this.current++;
        if (_this.current < _this.total) {
          _this.tween();
          return;
        }
        return typeof done === "function" ? done() : void 0;
      };
    };

    return AnimText;

  })(app.ui.header.els.base.BasicText);

}).call(this);

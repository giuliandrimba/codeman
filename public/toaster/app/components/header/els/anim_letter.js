(function() {

  __t('app.components.header.els').AnimLetter = (function() {
    var _delay;

    AnimLetter.prototype._alphabet = ["a", "b", "c", "d", "e", "f", "s", "e", "x", "j", "k", "l", "n", "o", "w", "p", "q", "$"];

    AnimLetter.prototype._iteration = 0;

    _delay = 0;

    AnimLetter.prototype._completed = false;

    AnimLetter.prototype.on_complete = function() {};

    function AnimLetter(letter) {
      this.letter = letter;
    }

    AnimLetter.prototype.tween = function(txt, delay) {
      var _this = this;
      this._delay = delay;
      this.txt = txt;
      this.txt.text += this.letter;
      this.txt_letters = txt.text.split("");
      this.last_pos = this.txt_letters.length - 1;
      this.txt_letters[this.last_pos] = this.letter;
      this.tick = function() {
        _this.ticker = window.requestAnimationFrame(_this.tick);
        if (_this._iteration >= (_this._alphabet.length - _this._delay) && !_this._completed) {
          _this._completed = true;
          _this.on_complete();
        }
        if (_this._iteration >= _this._alphabet.length) {
          _this.txt_letters = _this.txt.text.split("");
          _this.txt_letters[_this.last_pos] = _this.letter;
          _this.txt.text = _this.txt_letters.join("").toUpperCase();
          window.cancelAnimationFrame(_this.ticker);
          return;
        }
        return _this.change();
      };
      this.tick();
      return this;
    };

    AnimLetter.prototype.change = function() {
      this.txt_letters = this.txt.text.split("");
      this.txt_letters[this.last_pos] = this._alphabet[this.random_letter()];
      this.txt.text = this.txt_letters.join("").toUpperCase();
      return this._iteration++;
    };

    AnimLetter.prototype.random_letter = function() {
      var rnd;
      rnd = Math.floor((Math.random() * this._alphabet.length) + 0);
      return rnd;
    };

    return AnimLetter;

  })();

}).call(this);

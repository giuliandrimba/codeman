(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.ui.header.els').Quote = (function(_super) {

    __extends(Quote, _super);

    Quote.prototype.url = "/images/header/quote-flag.png";

    Quote.prototype.phrases = [];

    function Quote() {
      this._get_quote = __bind(this._get_quote, this);

      this._load_quote = __bind(this._load_quote, this);

      this._show_quote = __bind(this._show_quote, this);
      this.phrases = [];
      Quote.__super__.constructor.call(this);
    }

    Quote.prototype["in"] = function() {
      var _this = this;
      this.stage.addChild(this);
      this.alpha = 0;
      this.x = 870;
      this.y = -300;
      TweenLite.to(this, 3.5, {
        alpha: 1,
        y: 0,
        ease: Quart.easeInOut,
        delay: 2,
        onComplete: this._load_quote
      });
      setInterval(function() {
        return _this._show_quote();
      }, 30000);
      return this._done();
    };

    Quote.prototype._show_quote = function() {
      return TweenLite.to($(".quote"), 1, {
        css: {
          opacity: 0
        },
        ease: Quart.easeInOut,
        onComplete: this._get_quote
      });
    };

    Quote.prototype._load_quote = function() {
      var _this = this;
      return $.ajax({
        url: "data/quotes.json",
        cache: false,
        dataType: "json",
        type: "GET",
        success: function(data) {
          _this.phrases = data;
          return _this._get_quote();
        }
      });
    };

    Quote.prototype._get_quote = function() {
      var phrase, rndPhrase;
      rndPhrase = Math.floor(Math.random() * this.phrases.length);
      phrase = this.phrases[0];
      if (phrase) {
        $(".quote").find(".author").text("- " + phrase.author);
        $(".quote").find(".text").text(phrase.text);
        return TweenLite.to($(".quote"), 1, {
          css: {
            opacity: 1
          },
          ease: Quart.easeInOut
        });
      }
    };

    return Quote;

  })(app.ui.header.els.base.BitmapEl);

}).call(this);

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.ui.header.els').Quote = (function(_super) {

    __extends(Quote, _super);

    Quote.prototype.url = "/images/header/quote-flag.png";

    function Quote() {
      this._showQuote = __bind(this._showQuote, this);
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
        delay: 2,
        onComplete: this._showQuote
      });
      return this._done();
    };

    Quote.prototype._showQuote = function() {
      return $.ajax({
        url: "data/quotes.json",
        cache: false,
        dataType: "json",
        type: "GET",
        success: function(data) {
          var phrase, rndPhrase;
          rndPhrase = Math.floor(Math.random() * data.length);
          phrase = data[rndPhrase];
          $(".quote").find(".author").text("- " + phrase.author);
          $(".quote").find(".text").text("" + phrase.text + "");
          return TweenLite.to($(".quote"), 1, {
            css: {
              opacity: 1
            },
            ease: Quart.easeInOut
          });
        }
      });
    };

    return Quote;

  })(app.ui.header.els.base.BitmapEl);

}).call(this);

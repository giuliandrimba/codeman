(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.components.header.els').Quote = (function(_super) {

    __extends(Quote, _super);

    function Quote(img) {
      this.initialize(img);
      this.x = 870;
      this.y = 0;
    }

    Quote.prototype["in"] = function(done) {};

    return Quote;

  })(Bitmap);

}).call(this);

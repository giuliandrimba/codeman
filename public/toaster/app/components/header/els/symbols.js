(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.components.header.els').Symbols = (function(_super) {

    __extends(Symbols, _super);

    function Symbols(img) {
      this.initialize(img);
      this.x = 650;
      this.y = 10;
    }

    Symbols.prototype["in"] = function(done) {};

    return Symbols;

  })(Bitmap);

}).call(this);

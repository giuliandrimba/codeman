(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.components.header.els').LogoLabel = (function(_super) {

    __extends(LogoLabel, _super);

    function LogoLabel(img) {
      this.initialize(img);
      this.x = 209;
      this.y = 100;
    }

    LogoLabel.prototype["in"] = function(callback) {
      return typeof callback === "function" ? callback() : void 0;
    };

    return LogoLabel;

  })(Bitmap);

}).call(this);

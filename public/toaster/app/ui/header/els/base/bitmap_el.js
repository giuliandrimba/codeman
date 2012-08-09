(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.ui.header.els.base').BitmapEl = (function(_super) {

    __extends(BitmapEl, _super);

    function BitmapEl() {
      this.ready = new signals.Signal;
      this.showed = new signals.Signal;
      this.stage = null;
    }

    BitmapEl.prototype["in"] = function() {};

    BitmapEl.prototype.init = function() {
      var img,
        _this = this;
      img = new Image;
      img.src = this.url;
      return img.onload = function() {
        _this.initialize(img);
        return _this.ready.dispatch();
      };
    };

    BitmapEl.prototype._done = function() {
      this.stage.update();
      return this.showed.dispatch();
    };

    return BitmapEl;

  })(Bitmap);

}).call(this);

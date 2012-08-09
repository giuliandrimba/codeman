(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.ui.header.els.base').BasicText = (function(_super) {

    __extends(BasicText, _super);

    function BasicText(text, color) {
      this.ready = new signals.Signal;
      this.showed = new signals.Signal;
      this.stage = null;
    }

    BasicText.prototype.init = function() {
      return this.ready.dispatch();
    };

    BasicText.prototype["in"] = function() {};

    BasicText.prototype._done = function() {
      this.stage.update();
      return this.showed.dispatch();
    };

    return BasicText;

  })(Text);

}).call(this);

(function() {

  __t('app.ui.header.els.base').BasicEl = (function() {

    function BasicEl() {
      this.ready = new signals.Signal;
      this.showed = new signals.Signal;
      this.stage = null;
      this.ready.dispatch();
    }

    BasicEl.prototype.init = function() {
      return this.ready.dispatch();
    };

    BasicEl.prototype["in"] = function() {};

    BasicEl.prototype._done = function() {
      this.stage.update();
      return this.showed.dispatch();
    };

    return BasicEl;

  })();

}).call(this);

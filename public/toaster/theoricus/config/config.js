(function() {

  __t('theoricus.config').Config = (function() {

    Config.prototype.animate_at_startup = false;

    Config.prototype.enable_auto_transitions = true;

    Config.prototype.app_name = null;

    Config.prototype.no_push_state = null;

    Config.prototype.disable_transitions = null;

    function Config(the) {
      this.the = the;
      this.app_name = "app";
      this.animate_at_startup = app.config.animate_at_startup || false;
      this.enable_auto_transitions = app.enable_auto_transitions || true;
      this.no_push_state = typeof history.pushState !== 'function';
      this.no_push_state || (this.no_push_state = /(\?|\&)(crawler)/.test(window.location));
    }

    return Config;

  })();

}).call(this);

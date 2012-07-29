(function() {

  __t('app.config').AppConfig = (function() {

    function AppConfig() {}

    AppConfig.debug = true;

    return AppConfig;

  })();

  if (!app.config.AppConfig.debug) {
    console.log = function() {};
  }

}).call(this);

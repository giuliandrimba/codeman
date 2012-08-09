(function() {

  window.load_json = function(url, success, error) {
    var loader,
      _this = this;
    loader = $.getJSON(url, function(data) {
      return typeof success === "function" ? success(data) : void 0;
    });
    return loader.error(function(err) {
      var msg;
      msg = "JSON not found: " + url;
      if (!!app.config.AppConfig.debug) {
        throw msg;
      }
      return typeof error === "function" ? error(err) : void 0;
    });
  };

}).call(this);

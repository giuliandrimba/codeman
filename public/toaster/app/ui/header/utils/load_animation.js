(function() {

  __t('app.ui.header.utils').LoadAnimation = (function() {

    function LoadAnimation(url, callback) {
      var _this = this;
      load_json(url, function(data) {
        var spritesheet;
        spritesheet = new SpriteSheet(data);
        return typeof callback === "function" ? callback(data, spritesheet) : void 0;
      });
    }

    return LoadAnimation;

  })();

}).call(this);

(function() {

  __t('app.ui.header.utils').LoadImage = (function() {

    function LoadImage(url, callback) {
      var img,
        _this = this;
      img = new Image;
      img.src = image_url;
      img.onload = function() {
        return typeof callback === "function" ? callback(img) : void 0;
      };
    }

    return LoadImage;

  })();

}).call(this);

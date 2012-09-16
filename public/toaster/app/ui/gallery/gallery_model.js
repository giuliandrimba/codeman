(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.ui.gallery').GalleryModel = (function(_super) {

    __extends(GalleryModel, _super);

    function GalleryModel() {
      return GalleryModel.__super__.constructor.apply(this, arguments);
    }

    return GalleryModel;

  })(app.models.AppModel);

}).call(this);

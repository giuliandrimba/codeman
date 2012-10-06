(function() {

  __t('app.ui.gallery').Gallery = (function() {
    var GalleryModel;

    GalleryModel = app.ui.gallery.GalleryModel;

    Gallery.prototype._config = function() {
      this.index = 0;
      this.data = [];
      this.current = null;
      this.next = null;
      this.bt_prev = this.el.find(".left_arrow");
      this.bt_next = this.el.find(".right_arrow");
      return this.nav = this.el.find("nav");
    };

    function Gallery(el, id) {
      var _this = this;
      this.el = el;
      this.id = id;
      this._config();
      GalleryModel.service_url = "http://codeman-admin.herokuapp.com/services/files/" + this.id;
      GalleryModel.clear();
      GalleryModel.load(function(data) {
        _this._config_data();
        return _this.start();
      });
    }

    Gallery.prototype._config_data = function() {
      var item, _i, _len, _ref, _results;
      _ref = GalleryModel.all();
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        _results.push(this.data.push(item.file_url));
      }
      return _results;
    };

    Gallery.prototype._events = function() {
      var _this = this;
      this.bt_next.bind("click", function() {
        _this.gallery.next();
        return _this._check_bts();
      });
      this.bt_prev.bind("click", function() {
        _this.gallery.prev();
        return _this._check_bts();
      });
      this.nav.find("li").bind("click", function(e) {
        var index;
        _this._reset_nav();
        index = $(e.target).attr("id");
        index = parseInt(index);
        _this.gallery.goto(index);
        $(e.target).addClass("selected");
        return _this._check_bts();
      });
      this._check_bts();
      return this.gallery.onChange = function(id) {
        var index;
        _this._reset_nav();
        index = _this.nav.find("#" + id).attr("id");
        index = parseInt(index);
        return _this.nav.find("#" + id).addClass("selected");
      };
    };

    Gallery.prototype._reset_nav = function() {
      return this.nav.find("li").removeClass("selected");
    };

    Gallery.prototype._check_bts = function() {
      if (this.gallery.hasNext()) {
        this.bt_next.css("display", "block");
      } else {
        this.bt_next.css("display", "none");
      }
      if (this.gallery.hasPrev()) {
        return this.bt_prev.css("display", "block");
      } else {
        return this.bt_prev.css("display", "none");
      }
    };

    Gallery.prototype._build_nav = function() {
      var i, item, list, width, _i, _len, _ref, _results;
      width = 1000 / this.gallery.total();
      list = this.nav.find("ul");
      list.empty();
      _ref = this.data;
      _results = [];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        item = _ref[i];
        _results.push(list.append($("<li style='width:" + width + "px' id='" + i + "'></li>")));
      }
      return _results;
    };

    Gallery.prototype.start = function() {
      this.gallery = this.el.find("ul.gallery").gallery();
      this.gallery.init(this.data);
      this._build_nav();
      this.bt_prev.css("display", "none");
      $(this.nav.find("li")[0]).addClass("selected");
      return this._events();
    };

    return Gallery;

  })();

}).call(this);

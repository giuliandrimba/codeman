(function() {

  __t('app.ui.menu').Menu = (function() {

    function Menu(menu_id) {
      this.showed = new signals.Signal;
      this.menu = $(menu_id);
    }

    Menu.prototype["in"] = function() {
      var _this = this;
      return TweenLite.to(this.menu, 0.5, {
        css: {
          opacity: 1
        },
        ease: Quad.easeOut,
        delay: 3,
        onComplete: function() {
          return _this.showed.dispatch();
        }
      });
    };

    return Menu;

  })();

}).call(this);

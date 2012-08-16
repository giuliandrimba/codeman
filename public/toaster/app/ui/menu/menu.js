(function() {

  __t('app.ui.menu').Menu = (function() {

    function Menu(menu_id) {
      this.menu = $(menu_id);
    }

    Menu.prototype["in"] = function() {
      return TweenLite.to(this.menu, 0.5, {
        css: {
          opacity: 1
        },
        ease: Quad.easeOut,
        delay: 3
      });
    };

    return Menu;

  })();

}).call(this);

(function() {

  __t('app.components.header.els').Drop = (function() {

    Drop.prototype.config = function() {
      this.drop;
      this.drop_bg;
      this.x = 0;
      this.y = 0;
      return this.scale = 1;
    };

    function Drop(x, y, scale) {
      this.config();
      this.x = x;
      this.y = y;
      this.scale = scale;
    }

    Drop.prototype["in"] = function(callback) {};

    Drop.prototype.add_bg = function(img) {
      this.drop_bg = new Bitmap(img);
      this.drop_bg.x = this.x + 5;
      this.drop_bg.y = this.y + 5;
      return this.drop_bg.scaleX = this.drop_bg.scaleY = this.scale;
    };

    Drop.prototype.add_drop = function(img) {
      this.drop = new Bitmap(img);
      this.drop.x = this.x;
      this.drop.y = this.y;
      return this.drop.scaleX = this.drop.scaleY = this.scale;
    };

    Drop.prototype.add_at = function(stage) {
      stage.addChild(this.drop_bg);
      stage.addChild(this.drop);
      return stage.update();
    };

    return Drop;

  })();

}).call(this);

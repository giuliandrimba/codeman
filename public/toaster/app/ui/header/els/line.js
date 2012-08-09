(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.ui.header.els').Line = (function(_super) {

    __extends(Line, _super);

    function Line(x, y, size, color, put_shadow) {
      if (put_shadow == null) {
        put_shadow = true;
      }
      this.drawLine = __bind(this.drawLine, this);

      Line.__super__.constructor.call(this);
      this.easing = size / 10;
      this.final_x = x + size;
      this.final_y = y + size;
      this.init_x = x;
      this.init_y = y;
      this.current_x = this.init_x;
      this.size = 0;
      this.color = color;
      this.shadow = new Shadow("#878787", -5, 1, 2);
      this.graphic = new Graphics;
      this.graphic.beginStroke(this.color);
      this.graphic.setStrokeStyle(1);
      this.graphic.moveTo(x, y);
      this.shape = new Shape(this.graphic);
      if (put_shadow) {
        this.shape.shadow = this.shadow;
      }
    }

    Line.prototype["in"] = function() {
      var delay,
        _this = this;
      this.stage.addChild(this.shape);
      delay = Math.random() * 200;
      return setTimeout((function() {
        _this.tick();
        return _this._done();
      }), delay);
    };

    Line.prototype.tick = function() {
      return Ticker.addListener(this.drawLine);
    };

    Line.prototype.drawLine = function() {
      this.size += this.easing;
      this.easing -= this.easing / 10;
      if (this.easing <= 0) {
        this.easing = 0;
      }
      if (this.current_x >= (this.final_x - 0.1)) {
        this.finished();
      }
      this.current_x = this.init_x + this.size;
      return this.graphic.lineTo(this.init_x + this.size, this.init_y + this.size);
    };

    Line.prototype.finished = function() {
      return Ticker.removeListener(this.drawLine);
    };

    return Line;

  })(app.ui.header.els.base.BasicEl);

}).call(this);

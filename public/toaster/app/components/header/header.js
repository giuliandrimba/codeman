(function() {

  __t('app.components.header').Header = (function() {
    var AnimText, Background, Brain, BrainArrow, Drop, Line, Logo, LogoLabel, Quote, SplatterLogo, SplatterTop, Symbols, TopStripe;

    Background = app.components.header.els.Background;

    TopStripe = app.components.header.els.TopStripe;

    SplatterLogo = app.components.header.els.SplatterLogo;

    Logo = app.components.header.els.Logo;

    SplatterTop = app.components.header.els.SplatterTop;

    Drop = app.components.header.els.Drop;

    Line = app.components.header.els.Line;

    Brain = app.components.header.els.Brain;

    LogoLabel = app.components.header.els.LogoLabel;

    BrainArrow = app.components.header.els.BrainArrow;

    Quote = app.components.header.els.Quote;

    Symbols = app.components.header.els.Symbols;

    AnimText = app.components.header.els.AnimText;

    Header.prototype.config = function() {
      this.Assets = app.config.Assets;
      this.image_assets = this.Assets.header.images;
      this.animation_assets = this.Assets.header.animations;
      this.assets_loaded = 0;
      this.total_assets = Object.keys(this.Assets.header.images).length + Object.keys(this.Assets.header.animations).length;
      this.bg;
      this.splatter_logos;
      this.logo;
      this.splatter_top;
      this.top_stripe;
      this.brain_arrow;
      this.brain;
      this.logo_label;
      this.symbols;
      this.quote;
      this.quote_text = document.createElement("p");
      this.text_top = new AnimText("C:CODEMAN/WEBSITE", "#000");
      this.text_logo = new AnimText("CREATIVE CODER");
      this.bit_text_01 = new AnimText("011010101101101001", "#e54c6b");
      this.bit_text_02 = new AnimText("011010101101101001", "#e54c6b");
      this.bit_text_03 = new AnimText("011010101101101001", "#e54c6b");
      this.drop_01 = new Drop(60, 140, 1);
      this.drop_02 = new Drop(43, 122, 0.6);
      this.drop_03 = new Drop(90, 125, 0.6);
      this.drop_04 = new Drop(66, 100, 0.7);
      this.drop_line = new Line(55, 93, 60, "#ee1d23");
      this.top_line_01 = new Line(754, 0, 53, "#ee1d23");
      this.top_line_02 = new Line(775, 0, 80, "#ee1d23");
      this.top_line_03 = new Line(807, 0, 160, "#000", false);
      this.top_line_04 = new Line(823, 0, 130, "#000", false);
      this.label_line_01 = new Line(210, 57, 160, "#ee1d23");
      this.label_line_02 = new Line(266, 95, 50, "#ee1d23");
      return this.loaded = new signals.Signal;
    };

    function Header(canvas_id) {
      this.canvas = document.getElementById(canvas_id);
      this.config();
      this.load_all_assets();
    }

    Header.prototype.add_events = function() {};

    Header.prototype["in"] = function() {
      var _this = this;
      this.stage = new Stage(this.canvas);
      Ticker.setFPS(30);
      Ticker.addListener(this.stage);
      this.add_events();
      this.add_el(this.bg);
      return setTimeout((function() {
        return _this.start_in_queue();
      }), 300);
    };

    Header.prototype.config_index = function() {
      this.add_child(this.bg);
      this.add_child(this.splatter_logo);
      this.add_child(this.splatter_top);
      this.add_child(this.top_stripe);
      this.label_line_01.add_at(this.stage);
      this.label_line_02.add_at(this.stage);
      this.add_child(this.logo_label);
      this.add_child(this.brain_arrow);
      this.add_child(this.bit_text_03);
      this.add_child(this.bit_text_01);
      this.add_child(this.bit_text_02);
      this.add_child(this.brain);
      this.add_child(this.logo);
      this.drop_line.add_at(this.stage);
      this.add_drops();
      this.top_line_01.add_at(this.stage);
      this.top_line_02.add_at(this.stage);
      this.top_line_03.add_at(this.stage);
      this.top_line_04.add_at(this.stage);
      this.add_child(this.symbols);
      this.add_child(this.quote);
      this.add_child(this.text_top);
      this.add_child(this.text_logo);
      this.text_top.x = 140;
      this.text_top.y = 25;
      this.text_logo.x = 257;
      this.text_logo.y = 90;
      this.bit_text_01.x = 150;
      this.bit_text_01.y = 165;
      this.bit_text_02.x = 150;
      this.bit_text_02.y = 182;
      this.bit_text_03.x = 358;
      this.bit_text_03.y = 175;
      this.quote_text.className = "quote";
      this.quote_text.innerText = "Real programmers don't comment their code. It was hard to write, it should be hard to understand. ";
      return this.canvas.parentNode.appendChild(this.quote_text);
    };

    Header.prototype.start_in_queue = function() {
      var _this = this;
      this.config_index();
      this.add_el(this.splatter_logo);
      setTimeout((function() {
        return _this.add_el(_this.splatter_top, function() {
          return setTimeout((function() {
            return _this.add_el(_this.top_stripe);
          }), 150);
        });
      }), 350);
      this.top_line_01["in"]();
      this.top_line_02["in"]();
      this.top_line_03["in"]();
      this.top_line_04["in"]();
      this.label_line_01["in"]();
      this.label_line_02["in"]();
      this.drop_line["in"]();
      this.text_top["in"]();
      this.text_logo["in"]();
      this.bit_text_01["in"]();
      this.bit_text_02["in"]();
      this.bit_text_03["in"]();
      this.add_el(this.brain);
      return this.add_el(this.logo);
    };

    Header.prototype.add_el = function(el, callback) {
      return el["in"](callback);
    };

    Header.prototype.add_drops = function() {
      this.drop_01.add_at(this.stage);
      this.drop_02.add_at(this.stage);
      this.drop_03.add_at(this.stage);
      return this.drop_04.add_at(this.stage);
    };

    Header.prototype.load_all_assets = function(callback) {
      var _this = this;
      this.load_image(this.image_assets.symbols, function(img) {
        return _this.symbols = new Symbols(img);
      });
      this.load_image(this.image_assets.quote, function(img) {
        return _this.quote = new Quote(img);
      });
      this.load_image(this.image_assets.bg, function(img) {
        return _this.bg = new Background(img);
      });
      this.load_image(this.image_assets.brain_arrow, function(img) {
        return _this.brain_arrow = new BrainArrow(img);
      });
      this.load_image(this.image_assets.top_stripe, function(img) {
        return _this.top_stripe = new TopStripe(img);
      });
      this.load_image(this.image_assets.logo_label, function(img) {
        return _this.logo_label = new LogoLabel(img);
      });
      this.load_image(this.image_assets.drop, function(img) {
        _this.drop_01.add_drop(img);
        _this.drop_02.add_drop(img);
        _this.drop_03.add_drop(img);
        return _this.drop_04.add_drop(img);
      });
      this.load_image(this.image_assets.drop_bg, function(img) {
        _this.drop_01.add_bg(img);
        _this.drop_02.add_bg(img);
        _this.drop_03.add_bg(img);
        return _this.drop_04.add_bg(img);
      });
      this.load_animation(this.animation_assets.splatter_logo, function(data, spritesheet) {
        return _this.splatter_logo = new SplatterLogo(spritesheet);
      });
      this.load_animation(this.animation_assets.logo, function(data, spritesheet) {
        return _this.logo = new Logo(spritesheet);
      });
      this.load_animation(this.animation_assets.splatter_header, function(data, spritesheet) {
        return _this.splatter_top = new SplatterTop(spritesheet);
      });
      return this.load_animation(this.animation_assets.brain, function(data, spritesheet) {
        return _this.brain = new Brain(spritesheet);
      });
    };

    Header.prototype.load_image = function(image_url, callback) {
      var img,
        _this = this;
      img = new Image;
      img.src = image_url;
      return img.onload = function() {
        _this.assets_loaded++;
        if (typeof callback === "function") {
          callback(img);
        }
        return _this.dispatch_loaded();
      };
    };

    Header.prototype.load_animation = function(asset_url, callback) {
      var _this = this;
      return load_json(asset_url, function(data) {
        var spritesheet;
        _this.assets_loaded++;
        spritesheet = new SpriteSheet(data);
        if (typeof callback === "function") {
          callback(data, spritesheet);
        }
        return _this.dispatch_loaded();
      });
    };

    Header.prototype.dispatch_loaded = function() {
      if (this.assets_loaded === this.total_assets) {
        this.loaded.dispatch();
        return this["in"]();
      }
    };

    Header.prototype.add_child = function(obj) {
      this.stage.addChild(obj);
      return this.stage.update();
    };

    return Header;

  })();

}).call(this);

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  __t('app.ui.header').Header = (function() {
    var AnimText, Background, Brain, BrainArrow, Drop, Intro, Line, Logo, LogoLabel, Quote, SplatterLogo, SplatterTop, Symbols, TopStripe;

    Intro = app.ui.header.Intro;

    Background = app.ui.header.els.Background;

    TopStripe = app.ui.header.els.TopStripe;

    SplatterLogo = app.ui.header.els.SplatterLogo;

    Logo = app.ui.header.els.Logo;

    SplatterTop = app.ui.header.els.SplatterTop;

    Drop = app.ui.header.els.Drop;

    Line = app.ui.header.els.Line;

    Brain = app.ui.header.els.Brain;

    LogoLabel = app.ui.header.els.LogoLabel;

    BrainArrow = app.ui.header.els.BrainArrow;

    Quote = app.ui.header.els.Quote;

    Symbols = app.ui.header.els.Symbols;

    AnimText = app.ui.header.els.AnimText;

    function Header(canvas_id) {
      this.on_ready = __bind(this.on_ready, this);
      this.ready = new signals.Signal;
      this.canvas = document.getElementById(canvas_id);
      this.stage = new Stage(this.canvas);
      Ticker.setFPS(30);
      Ticker.addListener(this.stage);
      this.intro = new Intro(this.stage);
      this.intro.add(new Background);
      this.intro.add(new SplatterTop);
      this.intro.add(new SplatterLogo);
      this.intro.add(new Line(775, 0, 80, "#ee1d23"));
      this.intro.add(new Line(807, 0, 160, "#000", false));
      this.intro.add(new Line(823, 0, 130, "#000", false));
      this.intro.add(new Line(210, 57, 150, "#ee1d23"));
      this.intro.add(new Line(266, 95, 50, "#ee1d23"));
      this.intro.add(new AnimText("011100110110010101111000", "#e54c6b", 390, 175));
      this.intro.add(new AnimText("011011100110111101110111", "#e54c6b", 150, 165));
      this.intro.add(new AnimText("011001110110100101110100", "#e54c6b", 150, 182));
      this.intro.add(new AnimText("C:CODEMAN/WEBSITE", "#000", 140, 25));
      this.intro.add(new AnimText("INTERACTIVE DEVELOPER", "#000", 257, 90));
      this.intro.add(new LogoLabel);
      this.intro.add(new BrainArrow);
      this.intro.add(new Brain);
      this.intro.add(new Logo);
      this.intro.add(new TopStripe);
      this.intro.add(new Line(55, 93, 60, "#ee1d23"));
      this.intro.add(new Line(754, 0, 53, "#ee1d23"));
      this.intro.add(new Drop(60, 140, 1, this.stage));
      this.intro.add(new Drop(43, 122, 0.6, this.stage));
      this.intro.add(new Drop(90, 125, 0.6, this.stage));
      this.intro.add(new Drop(66, 100, 0.7, this.stage));
      this.intro.add(new Symbols);
      this.intro.add(new Quote);
      this.intro.ready.add(this.on_ready);
    }

    Header.prototype["in"] = function() {
      var _this = this;
      return setTimeout(function() {
        $("#preloader").hide();
        return _this.intro.run();
      }, 2000);
    };

    Header.prototype.on_ready = function() {
      return this.ready.dispatch();
    };

    return Header;

  })();

}).call(this);

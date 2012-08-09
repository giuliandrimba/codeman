(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  __t('app.ui.header').Intro = (function() {
    var can_run, current_in;

    can_run = false;

    current_in = 0;

    function Intro(stage) {
      this.stage = stage;
      this._el_ready = __bind(this._el_ready, this);

      this._next_in = __bind(this._next_in, this);

      this.commands = [];
      this.total_els = 0;
      this.els_ready = 0;
      this.ready = new signals.Signal;
    }

    Intro.prototype.add = function(el) {
      this.total_els++;
      el.ready.add(this._el_ready);
      el.showed.add(this._next_in);
      el.stage = this.stage;
      el.init();
      return this.commands.push(el);
    };

    Intro.prototype.run = function() {
      if (this.els_ready < (this.total_els - 1)) {
        can_run = true;
        return;
      }
      return this._in();
    };

    Intro.prototype._in = function() {
      return this.commands[current_in]["in"]();
    };

    Intro.prototype._next_in = function() {
      current_in++;
      if (current_in <= (this.total_els - 1)) {
        return this._in();
      }
    };

    Intro.prototype._el_ready = function() {
      this.els_ready++;
      if (this.els_ready === this.total_els) {
        this.ready.dispatch();
        if (can_run) {
          return this._in();
        }
      }
    };

    return Intro;

  })();

}).call(this);

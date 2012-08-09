
/*
	Router Logic inspired by RouterJS:
	https://github.com/haithembelhaj/RouterJs
*/


(function() {

  __t('theoricus.core').Router = (function() {
    var Factory;

    Factory = null;

    Router.prototype.routes = [];

    Router.prototype.listeners = [];

    Router.prototype.trigger = true;

    function Router(the, on_change) {
      var opts, route, _ref,
        _this = this;
      this.the = the;
      this.on_change = on_change;
      Factory = this.the.factory;
      _ref = app.routes;
      for (route in _ref) {
        opts = _ref[route];
        this.map(route, opts.to, opts.at, opts.el, this);
      }
      History.Adapter.bind(window, 'statechange', function() {
        return _this.route(History.getState());
      });
      setTimeout(function() {
        var url;
        url = window.location.pathname;
        if (url === "/") {
          url = app.root;
        }
        return _this.run(url);
      }, 1);
    }

    Router.prototype.map = function(route, to, at, el) {
      return this.routes.push(new theoricus.core.Route(route, to, at, el, this));
    };

    Router.prototype.route = function(state) {
      var route, url, _i, _len, _ref;
      if (this.trigger) {
        url = state.title || state.hash;
        if (url === "/") {
          url = app.root;
        }
        _ref = this.routes;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          route = _ref[_i];
          if (route.matcher.test(url)) {
            if (typeof this.on_change === "function") {
              this.on_change(route.clone(url));
            }
            return;
          }
        }
      }
      return this.trigger = true;
    };

    Router.prototype.navigate = function(url, trigger, replace) {
      var action;
      if (trigger == null) {
        trigger = true;
      }
      if (replace == null) {
        replace = false;
      }
      if (this.the.config.no_push_state) {
        window.location = url;
      } else {
        this.trigger = trigger;
        action = replace ? "replaceState" : "pushState";
        return History[action](null, url, url);
      }
    };

    Router.prototype.run = function(url, trigger) {
      if (trigger == null) {
        trigger = true;
      }
      this.trigger = trigger;
      return this.route({
        title: url
      });
    };

    Router.prototype.go = function(index) {
      return History.go(index);
    };

    Router.prototype.back = function() {
      return History.back();
    };

    Router.prototype.forward = function() {
      return History.forward();
    };

    return Router;

  })();

}).call(this);

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  __t('theoricus.core').Processes = (function() {
    var ArrayUtil, Factory;

    Factory = null;

    ArrayUtil = theoricus.utils.ArrayUtil;

    Processes.prototype.locked = false;

    Processes.prototype.disable_transitions = null;

    Processes.prototype.active_processes = [];

    Processes.prototype.dead_processes = [];

    Processes.prototype.pending_processes = [];

    function Processes(the) {
      var _this = this;
      this.the = the;
      this._run_pending_processes = __bind(this._run_pending_processes, this);

      this._destroy_dead_processes = __bind(this._destroy_dead_processes, this);

      this._on_router_change = __bind(this._on_router_change, this);

      Factory = this.the.factory;
      if (this.the.config.animate_at_startup === false) {
        this.disable_transitions = this.the.config.disable_transitions;
        this.the.config.disable_transitions = true;
      }
      $(document).ready(function() {
        return _this.router = new theoricus.core.Router(_this.the, _this._on_router_change);
      });
    }

    Processes.prototype._on_router_change = function(route) {
      if (this.locked) {
        return this.router.navigate(this.last_route.location, false, true);
      }
      this.last_route = route;
      this.locked = true;
      this.the.crawler.is_rendered = false;
      this._filter_pending_processes(route);
      this._filter_dead_processes();
      return this._destroy_dead_processes();
    };

    Processes.prototype._filter_pending_processes = function(route) {
      var search, _results;
      this.pending_processes = [route];
      _results = [];
      while (true && route && route.target_route) {
        search = {
          raw: {
            route: route.target_route
          }
        };
        route = ArrayUtil.find(this.router.routes, search);
        if (route != null) {
          route = route.item.clone();
        }
        if (route != null) {
          this.pending_processes.push(route);
          if (route.target_route === null) {
            break;
          } else {
            _results.push(void 0);
          }
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Processes.prototype._filter_dead_processes = function() {
      var active, found, location, search, _i, _len, _ref, _results;
      this.dead_processes = [];
      _ref = this.active_processes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        active = _ref[_i];
        search = {
          raw: {
            route: active.raw.route
          }
        };
        found = ArrayUtil.find(this.pending_processes, search);
        if (found != null) {
          location = found.item.location;
          if ((location != null) && location !== active.location) {
            found = null;
          }
        }
        if (found === null) {
          _results.push(this.dead_processes.push(active));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Processes.prototype._destroy_dead_processes = function() {
      var route, search;
      if (this.dead_processes.length) {
        route = this.dead_processes.pop();
        search = {
          raw: {
            route: route.raw.route
          }
        };
        ArrayUtil["delete"](this.active_processes, search);
        return route.destroy(this._destroy_dead_processes);
      } else {
        return this._run_pending_processes();
      }
    };

    Processes.prototype._run_pending_processes = function() {
      var route, search;
      if (this.pending_processes.length) {
        route = this.pending_processes.pop();
        search = {
          raw: {
            route: route.raw.route
          }
        };
        if (ArrayUtil.find(this.active_processes, search) == null) {
          this.active_processes.push(route);
          return route.run(this._run_pending_processes);
        } else {
          return this._run_pending_processes();
        }
      } else {
        this.locked = false;
        this.the.crawler.is_rendered = true;
        if (this.disable_transitions != null) {
          this.the.config.disable_transitions = this.disable_transitions;
          return this.disable_transitions = null;
        }
      }
    };

    return Processes;

  })();

}).call(this);

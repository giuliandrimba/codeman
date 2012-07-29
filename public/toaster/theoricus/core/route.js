
/*
	Router Logic inspired by RouterJS:
	https://github.com/haithembelhaj/RouterJs
*/


(function() {

  __t('theoricus.core').Route = (function() {
    var Factory, StringUtil;

    Factory = null;

    StringUtil = theoricus.utils.StringUtil;

    Route.named_param_reg = /:\w+/g;

    Route.splat_param_reg = /\*\w+/g;

    Route.prototype.api = null;

    Route.prototype.location = null;

    function Route(route, to, at, el, router, location) {
      this.router = router;
      this.location = location != null ? location : null;
      Factory = this.router.the.factory;
      this.raw = {
        route: route,
        to: to,
        at: at,
        el: el
      };
      this.matcher = route.replace(Route.named_param_reg, '([^\/]+)');
      this.matcher = this.matcher.replace(Route.splat_param_reg, '(.*?)');
      this.matcher = new RegExp("^" + this.matcher + "$");
      this.api = {};
      this.api.controller_name = to.split("/")[0];
      this.api.controller = Factory.controller(this.api.controller_name);
      this.api.action = to.split("/")[1];
      if (location != null) {
        this.api.params = this.matcher.exec(location).slice(1);
      }
      this.target_route = at;
      this.target_el = el;
    }

    Route.prototype.run = function(after_run) {
      return this.api.controller._run(this, after_run);
    };

    Route.prototype.destroy = function(after_destroy) {
      return this.api.controller._destroy(this, after_destroy);
    };

    Route.prototype.clone = function(location) {
      return new Route(this.raw.route, this.raw.to, this.raw.at, this.raw.el, this.router, location);
    };

    return Route;

  })();

}).call(this);

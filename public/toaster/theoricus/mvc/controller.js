(function() {

  __t('theoricus.mvc').Controller = (function() {
    var Factory, StringUtil;

    function Controller() {}

    Factory = null;

    StringUtil = theoricus.utils.StringUtil;

    Controller.prototype._boot = function(the) {
      this.the = the;
      Factory = this.the.factory;
      return this;
    };

    Controller.prototype._run = function(route, after_run) {
      var model;
      this.route = route;
      this.after_run = after_run;
      if (this[this.route.api.action] != null) {
        return this[this.route.api.action].apply(this, this.route.api.params);
      } else {
        model = Factory.model(this.route.api.controller_name);
        return this.render(this.route.api.action, model);
      }
    };

    Controller.prototype._destroy = function(route, after_destroy) {
      var _this = this;
      route.view.after_out = after_destroy;
      return route.view.out(function() {
        var _base;
        $(route.view.el).empty();
        return typeof (_base = route.view).after_out === "function" ? _base.after_out() : void 0;
      });
    };

    Controller.prototype.render = function(view_name, data) {
      this.route.view = Factory.view(this.route.api.controller_name, view_name);
      this.route.view.after_in = this.after_run;
      return this.route.view._render(this.route, view_name, data);
    };

    return Controller;

  })();

}).call(this);

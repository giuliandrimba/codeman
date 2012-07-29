(function() {

  __t('theoricus.mvc').View = (function() {
    var Factory;

    function View() {}

    Factory = null;

    View.prototype._boot = function(the) {
      this.the = the;
      Factory = this.the.factory;
      return this;
    };

    View.prototype._render = function(route, auto_tmpl_name, data) {
      this.route = route;
      this.data = data != null ? data : {};
      this.el = $(this.route.target_el);
      if (this.render) {
        this.render(data);
      } else {
        this.render_template(auto_tmpl_name, data);
      }
      return typeof this.set_triggers === "function" ? this.set_triggers() : void 0;
    };

    View.prototype.render_template = function(template, data) {
      var dom;
      template = Factory.template(this.route.api.controller_name, template);
      dom = template(data);
      this.el.append(dom);
      return this["in"](this.after_in);
    };

    View.prototype["in"] = function(after_in) {
      var animate,
        _this = this;
      animate = this.the.config.enable_auto_transitions;
      animate &= this.the.config.disable_transitions;
      if (animate) {
        return typeof after_in === "function" ? after_in() : void 0;
      } else {
        this.el.css("opacity", 0);
        return this.el.animate({
          opacity: 1
        }, 600, function() {
          return typeof after_in === "function" ? after_in() : void 0;
        });
      }
    };

    View.prototype.out = function(after_out) {
      var animate;
      animate = this.the.config.enable_auto_transitions;
      animate &= this.the.config.disable_transitions;
      if (animate) {
        return typeof after_out === "function" ? after_out() : void 0;
      } else {
        return this.el.animate({
          opacity: 0
        }, 300, after_out);
      }
    };

    View.prototype.navigate = function(url) {
      return this.the.processes.router.navigate(url);
    };

    return View;

  })();

}).call(this);

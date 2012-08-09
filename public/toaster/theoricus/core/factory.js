(function() {

  __t('theoricus.core').Factory = (function() {
    var StringUtil;

    Factory.prototype.controllers = {};

    StringUtil = theoricus.utils.StringUtil;

    function Factory(the) {
      var app_name;
      this.the = the;
      app_name = this.the.config.app_name;
      this.c_tmpl = "" + app_name + ".controllers.{classname}Controller";
      this.m_tmpl = "" + app_name + ".models.{classname}Model";
      this.v_tmpl = "" + app_name + ".views.{ns}.{classname}View";
      this.t_tmpl = "{ns}-{name}";
    }

    Factory.prototype.controller = function(name) {
      var classpath, controller;
      name = StringUtil.camelize(name);
      if (this.controllers[name] != null) {
        return this.controllers[name];
      } else {
        classpath = this.c_tmpl.replace("{classname}", name);
        controller = eval(classpath);
        controller = new controller;
        controller._boot(this.the);
        return this.controllers[name] = controller;
      }
    };

    Factory.prototype.model = function(name) {
      var classpath, model;
      name = StringUtil.camelize(name);
      classpath = this.m_tmpl.replace("{classname}", name);
      model = eval(classpath);
      model = new model;
      return model._boot(this.the);
    };

    Factory.prototype.view = function(ns, name) {
      var classpath, view;
      name = StringUtil.camelize(name);
      classpath = this.v_tmpl.replace("{ns}", ns).replace("{classname}", name);
      view = eval(classpath);
      view = new view;
      return view._boot(this.the);
    };

    Factory.prototype.template = function(ns, name) {
      var path;
      path = this.t_tmpl.replace("{ns}", ns).replace(/\{name\}/g, name);
      return app.templates[path];
    };

    return Factory;

  })();

}).call(this);

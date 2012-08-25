(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.views').AppView = (function(_super) {

    __extends(AppView, _super);

    function AppView() {
      return AppView.__super__.constructor.apply(this, arguments);
    }

    AppView.prototype.preloader = {
      show: function() {
        return $("#preloader").css("display", "block");
      },
      hide: function() {
        return $("#preloader").css("display", "none");
      }
    };

    AppView.prototype.update_scroll = function() {
      $(".wrapper").find(".viewport").height(window.height());
      return $(".wrapper").tinyscrollbar_update();
    };

    AppView.prototype["in"] = function() {
      var footer_height;
      this.content = $(".wrapper").find(".content");
      this.footer = $("footer");
      footer_height = this.footer.height();
      if (this.content.height() < window.height()) {
        this.content.height(window.height() - footer_height);
      }
      if (this.content.height() < $(window).height()) {
        return this.footer.css("top", window.height() - footer_height);
      } else {
        return this.footer.css("top", this.content.height());
      }
    };

    return AppView;

  })(theoricus.mvc.View);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.views').AppView = (function(_super) {

    __extends(AppView, _super);

    AppView.prototype.preloader = {
      show: function() {
        return $("#preloader").css("display", "block");
      },
      hide: function() {
        return $("#preloader").css("display", "none");
      }
    };

    AppView.prototype.mark_menu = function(id) {
      $("#menu").find("a").removeClass("selected");
      return $("#" + id).addClass("selected");
    };

    AppView.prototype.update_scroll = function() {
      $(".wrapper").find(".viewport").height(window.height());
      return $(".wrapper").tinyscrollbar_update(0);
    };

    function AppView() {
      AppView.__super__.constructor.call(this);
      window.preloader = this.preloader;
    }

    AppView.prototype["in"] = function() {
      var content_height, footer_height;
      document.title = "Codeman - Portfolio of Giulian Drimba - Interactive Developer";
      this.content = $(".wrapper").find(".content");
      this.page_content = $("#page_content");
      this.footer = $("footer");
      footer_height = this.footer.height();
      content_height = this.page_content.height() + $("header").height() + footer_height;
      if (content_height < window.height()) {
        this.content.height(window.height() - footer_height);
      } else {
        this.content.height(content_height + footer_height);
      }
      if (content_height < $(window).height()) {
        this.footer.css("top", window.height() - footer_height);
      } else {
        this.footer.css("top", this.content.height() - footer_height);
      }
      return this.update_scroll();
    };

    return AppView;

  })(theoricus.mvc.View);

}).call(this);

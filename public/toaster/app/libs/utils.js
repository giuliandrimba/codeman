(function() {

  window.width = function() {
    if (typeof window.innerWidth === "number") {
      return window.innerWidth;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
      return document.documentElement.clientWidth;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
      return document.body.clientWidth;
    }
  };

  window.height = function() {
    if (typeof window.innerHeight === "number") {
      return window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
      return document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
      return document.body.clientHeight;
    }
  };

}).call(this);

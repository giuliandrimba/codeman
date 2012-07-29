(function() {

  __t('theoricus.utils').StringUtil = (function() {

    function StringUtil() {}

    StringUtil.ucfirst = function(str) {
      var a, b;
      a = str.substr(0, 1).toUpperCase();
      b = str.substr(1).toLowerCase();
      return a + b;
    };

    StringUtil.camelize = function(str) {
      var buffer, part, parts, _i, _len, _results;
      parts = [].concat(str.split("_"));
      buffer = "";
      _results = [];
      for (_i = 0, _len = parts.length; _i < _len; _i++) {
        part = parts[_i];
        _results.push(buffer += StringUtil.ucfirst(part));
      }
      return _results;
    };

    StringUtil.underscore = function(str) {
      str = str.replace(/([A-Z])/g, "_$1").toLowerCase();
      return str = str.substr(1) === "_" ? str.substr(1) : str;
    };

    return StringUtil;

  })();

}).call(this);

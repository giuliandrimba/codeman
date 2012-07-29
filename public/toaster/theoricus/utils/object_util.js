(function() {

  __t('theoricus.utils').ObjectUtil = (function() {

    function ObjectUtil() {}

    ObjectUtil.find = function(src, search) {
      var k, v;
      for (k in search) {
        v = search[k];
        if (v instanceof Object) {
          return ObjectUtil.find(src[k], v);
        }
        if (src[k] === v) {
          return src;
        }
      }
      return null;
    };

    return ObjectUtil;

  })();

}).call(this);

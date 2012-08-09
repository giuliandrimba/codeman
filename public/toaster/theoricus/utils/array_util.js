(function() {

  __t('theoricus.utils').ArrayUtil = (function() {
    var ObjectUtil;

    function ArrayUtil() {}

    ObjectUtil = theoricus.utils.ObjectUtil;

    ArrayUtil.find = function(src, search) {
      var i, v, _i, _len;
      for (i = _i = 0, _len = src.length; _i < _len; i = ++_i) {
        v = src[i];
        if (search instanceof String) {
          if (v === search) {
            return {
              item: v,
              index: i
            };
          }
        } else if (search instanceof Object) {
          if (ObjectUtil.find(v, search) != null) {
            return {
              item: v,
              index: i
            };
          }
        }
      }
      return null;
    };

    ArrayUtil["delete"] = function(src, search) {
      var item;
      item = ArrayUtil.find(src, search);
      if (item != null) {
        return src.splice(item.index, 1);
      }
    };

    return ArrayUtil;

  })();

}).call(this);

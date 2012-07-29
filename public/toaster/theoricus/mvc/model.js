(function() {

  __t('theoricus.mvc').Model = (function() {

    function Model() {}

    Model.prototype._boot = function(the) {
      this.the = the;
      return this;
    };

    return Model;

  })();

}).call(this);

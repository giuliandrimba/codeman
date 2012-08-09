(function() {

  __t('theoricus').Theoricus = (function() {

    Theoricus.prototype.app = null;

    Theoricus.prototype.root = null;

    Theoricus.prototype.factory = null;

    Theoricus.prototype.config = null;

    Theoricus.prototype.processes = null;

    Theoricus.prototype.crawler = (window.crawler = {
      is_rendered: false
    });

    function Theoricus() {
      this.config = new theoricus.config.Config(this);
      this.factory = new theoricus.core.Factory(this);
      this.processes = new theoricus.core.Processes(this);
    }

    return Theoricus;

  })();

  new theoricus.Theoricus;

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  __t('app.models').AppModel = (function(_super) {

    __extends(AppModel, _super);

    function AppModel() {
      return AppModel.__super__.constructor.apply(this, arguments);
    }

    AppModel.prototype.id = 0;

    AppModel.prototype.klass = AppModel;

    AppModel.cache = {};

    AppModel["new"] = function(atts) {
      var key, record, val;
      if (this.records == null) {
        this.records = [];
      }
      if (this.cache == null) {
        this.cache = {};
      }
      if (this.props == null) {
        this.props = [];
      }
      this.records.push((record = new this()));
      for (key in atts) {
        val = atts[key];
        this.props[key] = record[key] = val;
      }
      record.klass = this;
      return record;
    };

    AppModel.prototype["delete"] = function() {
      return this.klass.records.splice(this.find(record_id), 1);
    };

    AppModel.clear = function() {
      return this.records = [];
    };

    AppModel.all = function() {
      return this.records;
    };

    AppModel.first = function() {
      return this.records[0];
    };

    AppModel.last = function() {
      return this.records[this.records.length - 1];
    };

    AppModel.find = function(id) {
      var r, _i, _len, _ref;
      id = parseInt(id);
      _ref = this.all();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        r = _ref[_i];
        if ((parseInt(r.id)) === id) {
          return r;
        }
      }
      throw "Could't find record with id " + id;
    };

    AppModel.load = function(done) {
      var _this = this;
      if (this.cache[this.service_url] != null) {
        return typeof done === "function" ? done() : void 0;
      }
      return $.ajax({
        url: this.service_url,
        dataType: "json",
        success: function(data) {
          _this.cache[_this.service_url] = data;
          _this.after_load(data);
          return typeof done === "function" ? done() : void 0;
        },
        error: function(data) {
          throw data.statusText;
        }
      });
    };

    AppModel.after_load = function(data) {
      var item, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = data.length; _i < _len; _i++) {
        item = data[_i];
        _results.push(this["new"](item));
      }
      return _results;
    };

    return AppModel;

  })(theoricus.mvc.Model);

}).call(this);

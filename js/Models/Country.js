// Generated by CoffeeScript 1.4.0
(function() {

  define("Models/Country", ["Config"], function(Config) {
    var Country, Region, RegionCollection;
    Region = Backbone.Model.extend({
      attributes: {
        code: "",
        name: ""
      }
    });
    RegionCollection = Backbone.Collection.extend({
      model: Region,
      url: function() {
        return Config.baseURL + "/countries/" + this.countryCode + "/regions";
      },
      initialize: function(options) {
        return this.countryCode = options.code;
      },
      fetch: function() {
        var _this = this;
        if (localStorage["regions_" + this.countryCode] != null) {
          return this.reset(JSON.parse(localStorage["regions_" + this.countryCode]));
        } else {
          return this.sync("read", this, {
            success: function(res) {
              localStorage["regions_" + _this.countryCode] = JSON.stringify(res);
              return _this.reset(res);
            }
          });
        }
      }
    });
    return Country = Backbone.Model.extend({
      attributes: {
        code: "",
        country: ""
      },
      initialize: function(options) {
        this.regions = new RegionCollection({
          code: this.attributes.code
        });
        return this.regions.fetch();
      }
    });
  });

}).call(this);

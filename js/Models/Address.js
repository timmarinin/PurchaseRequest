// Generated by CoffeeScript 1.4.0
(function() {

  define("Models/Address", ["Models/Country"], function(Country) {
    var Address;
    return Address = Backbone.Model.extend({
      attributes: {
        address: "",
        address2: "",
        locality: "",
        country: Country,
        region: Country.region
      }
    });
  });

}).call(this);

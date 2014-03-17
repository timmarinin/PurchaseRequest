// Generated by CoffeeScript 1.4.0
(function() {

  define("Models/Address", ["Models/Country"], function(Country) {
    var Address;
    return Address = Backbone.Model.extend({
      attributes: {
        address: "",
        address2: "",
        locality: "",
        country: "",
        region: ""
      },
      validate: function(attributes) {
        if (attributes == null) {
          attributes = this.attributes;
        }
        if (_.isEmpty(attributes != null ? attributes.address : void 0)) {
          return "Address is empty";
        }
        if (_.isEmpty(attributes != null ? attributes.locality : void 0)) {
          return "Locality is empty";
        }
        if (_.isEmpty(attributes != null ? attributes.country : void 0)) {
          return "Country is not chosen";
        }
        if (_.isEmpty(attributes != null ? attributes.region : void 0)) {
          return "Region is not chosen";
        }
      }
    });
  });

}).call(this);

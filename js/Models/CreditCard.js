// Generated by CoffeeScript 1.4.0
(function() {

  define("Models/CreditCard", function() {
    var CreditCard;
    CreditCard = Backbone.Model.extend({
      attributes: {
        number: "",
        cardholder: "",
        expiration_month: "",
        expiration_year: ""
      },
      validate: function(attributes) {
        var expire_date, today_date;
        if (attributes == null) {
          attributes = this.attributes;
        }
        if (this.isNew()) {
          if (_.isEmpty(attributes)) {
            return "Credit card fields are not filled";
          }
          if (_.isEmpty(attributes.number)) {
            return "Credit card: card number is empty";
          }
          if (_.isEmpty(attributes.card_holder)) {
            return "Credit card: cardholder is empty";
          }
          if (_.isEmpty(attributes.expiration_month || _.isEmpty(attributes.expiration_year))) {
            return "Credit card: expiration date is incomplete";
          }
          if (!/^[0-9]+$/.test(attributes.number.replace(/[\s-\\\/]+/g, ""))) {
            return "Credit card: invalid number";
          }
          if (!$.isNumeric(attributes.expiration_month)) {
            return "Credit card: invalid expiration month";
          }
          if (!$.isNumeric(attributes.expiration_year)) {
            return "Credit card: invalid expiration year";
          }
          expire_date = new Date();
          expire_date.setDate(1);
          expire_date.setFullYear(2000 + parseInt(attributes.expiration_year, 10));
          expire_date.setMonth + parseInt(attributes.expiration_month, 10);
          today_date = new Date();
          window.expire = expire_date;
          console.log(expire_date - today_date);
          if (expire_date - today_date <= 0) {
            return "Credit card is already expired";
          }
        }
      }
    });
    return CreditCard;
  });

}).call(this);

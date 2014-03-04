// Generated by CoffeeScript 1.4.0
(function() {

  define("Views/Form", ["Models/PurchaseRequest", "Models/Address", "Models/CreditCard", "Views/Address", "Views/CreditCard"], function(PurchaseRequest, Address, CreditCard, AddressView, CreditCardView) {
    var Form;
    return Form = Backbone.View.extend({
      initialize: function() {
        this.creditCardView = new CreditCardView({
          model: this.model.creditCard
        });
        this.shippingView = new AddressView({
          model: this.model.shippingAddress
        });
        this.billingView = new AddressView({
          model: this.model.billingAddress
        });
        return this.render();
      },
      template: Handlebars.compile($(".pr-form").html()),
      render: function() {
        this.creditCardView.render();
        this.shippingView.render();
        return this.billingView.render();
      }
    });
  });

}).call(this);

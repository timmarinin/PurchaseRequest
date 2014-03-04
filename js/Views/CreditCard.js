// Generated by CoffeeScript 1.4.0
(function() {

  define("Views/CreditCard", ["Models/CreditCard"], function(CreditCard) {
    var CreditCardView;
    return CreditCardView = Backbone.View.extend({
      el: $(".pr-creditcard"),
      events: {
        "change .pr-creditcard-select": "renderForm"
      },
      initialize: function() {
        return this.model = new CreditCard;
      },
      template: Handlebars.compile($("#pr-creditcard").html()),
      templateForm: Handlebars.compile($("#pr-creditcard-form").html()),
      render: function() {
        console.log("rendering creditcard");
        return this.$el.html(this.template({
          selected: this.model.id
        }));
      },
      renderForm: function() {
        this.render();
        console.log('and form');
        return this.$el.append(this.templateForm());
      }
    });
  });

}).call(this);

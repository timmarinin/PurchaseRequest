// Generated by CoffeeScript 1.4.0
(function() {

  define("Views/CreditCard", ["Models/CreditCard", "Collections/CreditCard"], function(CreditCard, CreditCardCollection) {
    var CreditCardView;
    return CreditCardView = Backbone.View.extend({
      el: $(".pr-creditcard"),
      events: {
        "change .pr-creditcard-select": "updateToSelected",
        "keyup": "updateModel"
      },
      updateToSelected: function() {
        var newModel, selected;
        selected = $(".pr-creditcard select :selected").val();
        if (selected === "new") {
          this.updateModel();
        } else {
          newModel = this.collection.get(selected);
          if (newModel != null) {
            this.model.set(newModel.toJSON());
            this.parentModel.trigger("change");
          }
        }
        return this.render();
      },
      updateModel: function() {
        this.model.set({
          card_holder: this.$el.find('.pr-creditcard-form-cardholder').val(),
          expiration_month: this.$el.find('.pr-creditcard-form-expire').val(),
          expiration_year: this.$el.find('.pr-creditcard-form-expire-year').val(),
          number: this.$el.find('.pr-creditcard-form-number').val()
        });
        this.model.unset("id");
        return this.parentModel.trigger("change");
      },
      initialize: function(options) {
        var _this = this;
        if (options == null) {
          options = {};
        }
        this.parentModel = options.parentModel;
        this.model = this.parentModel.get("credit_card");
        this.collection = new CreditCardCollection;
        this.collection.fetch({
          success: function() {
            if (_this.collection.size() > 0) {
              _this.model.set(_this.collection.first().toJSON());
              setTimeout(function() {
                return _this.$el.find(".pr-creditcard-select [value=" + _this.model.id + "]").attr("selected", "selected");
              }, 0);
            }
            return _this.updateToSelected();
          }
        });
      },
      template: Handlebars.compile($("#pr-creditcard").html()),
      templateForm: Handlebars.compile($("#pr-creditcard-form").html()),
      render: function() {
        var selected;
        selected = this.$el.find(".pr-creditcard-select").val();
        this.$el.html(this.template({
          cards: this.collection.toJSON()
        }));
        if (selected === "new") {
          this.$el.append(this.templateForm());
        }
        $(".pr-creditcard select [value=" + selected + "]").attr("selected", "selected");
      }
    });
  });

}).call(this);

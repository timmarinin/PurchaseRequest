// Generated by CoffeeScript 1.7.1
(function() {
  define("Views/Address", ["Models/Address", "Collections/Address", "Collections/Country"], function(Address, AddressCollection, CountryCollection) {
    var AddressView;
    return AddressView = Backbone.View.extend({
      events: {
        "change .pr-address-select": "updateToSelected",
        "change .pr-address-country": "updateRegions",
        "change input": "updateModel"
      },
      updateToSelected: function() {
        var newModel;
        newModel = this.collection.get(this.$el.find(".pr-address-select :selected").val());
        console.log(this.model);
        this.model = newModel || this.model;
        console.log(this.model);
        return this.render();
      },
      updateParent: function() {
        this.parentModel.set("" + (this.options.samePossible === true ? "billing" : "shipping") + "Address", this.model);
        return console.log('updating pr from address');
      },
      updateModel: function() {
        this.model.set({
          address: this.$el.find('.pr-address-address').val(),
          address2: this.$el.find('.pr-address-address2').val(),
          locality: this.$el.find('.pr-address-locality').val(),
          country: this.$el.find('.pr-address-country').val(),
          region: this.$el.find('.pr-address-region').val()
        });
        return console.log('updating address');
      },
      updateRegions: function() {
        var regions, searchCode, _ref;
        searchCode = this.$el.find('.pr-address-country').val();
        regions = (_ref = this.countryCollection.findWhere({
          code: searchCode
        })) != null ? _ref.regions.models : void 0;
        this.$el.children('.pr-address-regions').html('<option>S00KA</OPTION>');
      },
      initialize: function(options) {
        if (options == null) {
          options = {};
        }
        this.options = options;
        this.model = new Address;
        this.parentModel = options.parentModel;
        this.collection = new AddressCollection;
        this.countryCollection = new CountryCollection;
        this.countryCollection.fetch({
          success: (function(_this) {
            return function() {};
          })(this)
        });
        this.collection.fetch({
          success: _.bind(this.render, this)
        });
        this.listenTo(this.model, "change", _.bind(this.updateParent, this));
      },
      template: Handlebars.compile($("#pr-address").html()),
      templateForm: Handlebars.compile($("#pr-address-form").html()),
      templateOptions: Handlebars.compile($("#pr-address-options").html()),
      render: function() {
        var selected;
        selected = this.$el.find(".pr-address-select :selected").val();
        console.log("rendering " + this.$el.className);
        this.$el.html(this.template({
          addresses: this.collection.toJSON()
        }));
        if (selected === "new") {
          this.$el.append(this.templateForm({
            countries: this.countryCollection.toJSON()
          }));
          this.updateRegions();
        }
        this.$el.find(".pr-address-select [value=" + selected + "]").attr("selected", "selected");
      }
    });
  });

}).call(this);

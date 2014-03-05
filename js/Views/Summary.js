// Generated by CoffeeScript 1.7.1
(function() {
  define("Views/Summary", ["Models/PurchaseRequest"], function(PurchaseRequest) {
    var SummaryView;
    return SummaryView = Backbone.View.extend({
      el: $('.pr-summary'),
      events: {
        "change model": "render"
      },
      initialize: function() {

        /*
        			for k of this.model.attributes				
        				this.listenTo k, "change", this.render
         */
        this.listenTo(this.model, "change", this.render);
        return this.render();

        /*
        			setTimeout func = (=>
        				this.render()
        				setTimeout func, 5
        			), 5
         */
      },
      template: Handlebars.compile($("#pr-summary").html()),
      render: function() {
        console.log("rendering summary " + (window.performance.now()));
        return this.$el.html(this.template(this.model.toJSON()));
      }
    });
  });

}).call(this);

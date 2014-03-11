// Generated by CoffeeScript 1.4.0
(function() {

  return require(['Views/Global'], function(GlobalView) {
    var app, router;
    app = {};
    app.Router = Backbone.Router.extend({
      routes: {
        "*default": "default"
      },
      "default": function() {
        return app.GlobalView = new GlobalView({
          el: $('body')
        });
      }
    });
    /*
    	window.app = app
    
    	#JSONStub
    	jsonstubheaders = 
    		"JsonStub-User-Key": "88a6fd2b-724e-4ed1-b2a3-56ff3fcba98d"
    		"JsonStub-Project-Key": "1fa9f304-dc7d-4cb9-b439-24b2276087c4"		
    
    	$.ajaxSetup
    		#headers: jsonstubheaders
    		beforeSend: (req) ->
    			console.log req
        
    	#/JSONStub
    	#
    	#
    	
    
    	#Simple debug for handlebars
    	Handlebars.registerHelper "debug", (optionalValue) ->
    		console.log "-------------------"
    		console.log '  Current Context'
    		console.log '-------------------'
    		console.log(this)
    		if (optionalValue) 
    			console.log '-----------------'
    			console.log '     Value'
    			console.log '-----------------'
    			console.log(optionalValue)
    */

    router = new app.Router;
    Backbone.history.start();
  });

}).call(this);

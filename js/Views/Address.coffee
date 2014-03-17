define "Views/Address",
["Models/Address","Collections/Address","Collections/Country"],
(Address,AddressCollection,CountryCollection) ->
	AddressView = Backbone.View.extend {
		events:
			"change .pr-address-select": "updateToSelected"
			"change .pr-address-country": "updateRegions"
			"change .pr-address-region": "updateModel"
			"keyup": "updateModel"
		

		updateToSelected: ->
			selected = @$el.find(".pr-address-select :selected").val()
			if selected == "same"
				newModel = @parentModel.get('address')
			else 
				newModel = @collection.get(selected)
			
			@model.set(newModel.toJSON()) if newModel?
			@parentModel.trigger "change"
			@render()

		updateModel:  ->
			for param in ['address','address2','locality','country','region']
				@model.set param, @.$el.find(".pr-address-#{param}").val()

			@model.set
				id: "" 

			@parentModel.trigger "change"

		updateRegions: ->
			newCountry = @$el.find('.pr-address-country :selected').val()
			newCountry ?= @model.get('country')
			@model.set('country',newCountry) if newCountry != undefined

			countryModel = @countryCollection.findWhere(code: newCountry)?.regions
			countryModel.fetch success: =>
				regions = @countryCollection.findWhere(code: newCountry).regions.toJSON()
				@$el.find('.pr-address-region').html @templateOptions {options: regions}
				console.log "success callback was called"
				@updateModel()
			return

		initialize: (options) ->
			options ?= {}
			@options = options
			@options.samePossible ?= false

			@parentModel = options.parentModel
			@model = @parentModel.get "#{if @options.samePossible then "billing_" else ""}address"

			@collection = new AddressCollection

			@countryCollection = new CountryCollection
			

			@collection.fetch success: =>
				if @options.samePossible
					@listenTo @parentModel.get('address'), "change", =>
						@model.set @parentModel.get('address').toJSON()
				else
					newModel = @collection.first()
					@model.set newModel.toJSON()
				@updateToSelected()
				return

			@countryCollection.fetch success: _.bind(@updateRegions,this)

			return

		template: Handlebars.compile $("#pr-address").html()
		templateForm: Handlebars.compile $("#pr-address-form").html()
		templateOptions: Handlebars.compile $("#pr-address-options").html()
		

		render: ->
			selected = @$el.find(".pr-address-select :selected").val()
			@$el.html @template addresses: @collection.toJSON(), samePossible: @options.samePossible

			if selected == "new"
				@$el.append @templateForm countries: @countryCollection.toJSON()
				@updateRegions()
			@$el.find(".pr-address-select [value=#{selected}]").attr("selected","selected")
			return

	}

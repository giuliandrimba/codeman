#<< theoricus/mvc/model

class AppModel extends theoricus.mvc.Model
	# PROPERTIES
	id:0
	klass:@
	@cache = {}

	# CREATE
	@new:(atts)->

		@records = [] unless @records?
		@cache = {} unless @cache?
		@props = [] unless @props?

		@records.push (record = new @() )
		@props[key] = record[key] = val for key, val of atts
		# record.id = @records.length
		record.klass = @
		record

	# DELETING
	delete:->
		@klass.records.splice (@find record_id), 1

	# ACESSING
	@clear:->@records = []
	@all:-> @records
	@first:-> @records[0]
	@last:-> @records[ @records.length - 1 ]

	@find:(id)->
		id = parseInt id

		for r in @all()
			return r if (parseInt r.id) == id
		
		throw "Could't find record with id #{id}"


	# LOADING
	@load:(done)->

		if @cache[@service_url]?
			return done?()

		$.ajax
		 	url: @service_url,
		 	dataType:"json"
		 	success: (data)=>
		 		@cache[ @service_url ] = data
		 		@after_load data
		 		done?()
		 	error:(data)->
		 		throw data.statusText


	@after_load:(data)->
		@new item for item in data
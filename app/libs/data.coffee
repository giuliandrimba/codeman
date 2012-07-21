window.load_json = (url, success, error)->
	loader = $.getJSON url, (data)=>
		success?(data)

	loader.error (err)->
		msg = "JSON not found: #{url}"
		throw msg unless !app.config.AppConfig.debug

		error?(err)
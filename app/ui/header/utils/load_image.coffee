class LoadImage

	constructor:(url, callback)->
		img = new Image
		img.src = image_url
		img.onload = =>
			callback?(img)
#<< app/config/*

# Conventions
# ss = spritesheets

class Header

	config:->
		#shortcuts
		@Assets = app.config.Assets
		@image_assets = @Assets.header.images
		@animation_assets = @Assets.header.animations

		#variables
		@assets_loaded = 0
		@total_assets = Object.keys(@Assets.header).length
		@bg
		@splatter_logos

		#events
		@loaded = new signals.Signal

	constructor:(canvas_id)->
		@canvas = document.getElementById canvas_id
		@config()

		@load_all_assets =>
			@loaded.dispatch()
			@in()

	in:->
		@stage = new Stage @canvas
		Ticker.setFPS 30
		Ticker.addListener @stage

		@add_child @bg
		@add_child @splatter_logo
		@splatter_logo.gotoAndPlay "intro"


	load_all_assets:(callback)->

		@load_image @image_assets.bg, (img)=>
			@bg = new Bitmap img
			callback?() if @assets_loaded is @total_assets

		@load_animation @animation_assets.splatter_logo, (data)=>
			spritesheet = new SpriteSheet data
			@splatter_logo = new BitmapAnimation spritesheet
			callback?() if @assets_loaded is @total_assets

	load_image:(image_url,callback)->
		img = new Image
		img.src = image_url
		img.onload = =>
			@assets_loaded++
			callback?(img)

	load_animation:(asset_url,callback)->
		load_json asset_url, (data)=>
			@assets_loaded++
			callback?(data)

	add_child:(obj)->
		@stage.addChild obj
		@stage.update()
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
		@logo
		@splatter_header

		#events
		@loaded = new signals.Signal

	constructor:(canvas_id)->
		@canvas = document.getElementById canvas_id
		@config()

		@load_all_assets =>
			@loaded.dispatch()
			@in()

	add_events:->
		

	in:->
		@stage = new Stage @canvas
		Ticker.setFPS 30
		Ticker.addListener @stage

		@add_events()

		@add_bg()
		setTimeout (=>
			@start_in_queue()
		), 300

	start_in_queue:->
		@add_splatter_logo()

		setTimeout (=>
			@add_splatter_header =>
				setTimeout (=>
					@add_logo()
				), 150
		), 350


	add_bg:()->
		@bg.alpha = 0
		@add_child @bg
		Tween.get(@bg).to({alpha:1}, 1000, Ease.quadOut);

	add_splatter_logo:(callback)->
		@add_child @splatter_logo
		@splatter_logo.y = 0

		@splatter_logo.onAnimationEnd = (anim, name)->
			anim.paused = true
			anim.currentAnimationFrame = anim.spriteSheet.getNumFrames() - 1
			callback?()

		@splatter_logo.gotoAndPlay "intro"

	add_splatter_header:(callback)->
		@add_child @splatter_header
		@splatter_header.y = 0
		@splatter_header.x = 660

		@splatter_header.onAnimationEnd = (anim, name)->
			anim.paused = true
			anim.currentAnimationFrame = anim.spriteSheet.getNumFrames() - 1
			callback?()

		@splatter_header.gotoAndPlay "intro"

	add_logo:(callback)->
		@add_child @logo
		@logo.y = 50
		@logo.x = 105

		@logo.onAnimationEnd = (anim, name)->
			anim.paused = true
			anim.currentAnimationFrame = anim.spriteSheet.getNumFrames() - 1
			callback?()

		@logo.gotoAndPlay "intro"


	load_all_assets:(callback)->

		@load_image @image_assets.bg, (img)=>
			@bg = new Bitmap img
			callback?() if @assets_loaded is @total_assets

		@load_animation @animation_assets.splatter_logo, (data)=>
			spritesheet = new SpriteSheet data
			@splatter_logo = new BitmapAnimation spritesheet
			callback?() if @assets_loaded is @total_assets

		@load_animation @animation_assets.logo, (data)=>
			spritesheet = new SpriteSheet data
			@logo = new BitmapAnimation spritesheet
			callback?() if @assets_loaded is @total_assets

		@load_animation @animation_assets.splatter_header, (data)=>
			spritesheet = new SpriteSheet data
			@splatter_header = new BitmapAnimation spritesheet
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
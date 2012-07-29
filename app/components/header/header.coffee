#<< app/config/*
#<< app/components/header/els/*	

# Conventions
# ss = spritesheets

class Header

	Background = app.components.header.els.Background
	TopStripe = app.components.header.els.TopStripe
	SplatterLogo = app.components.header.els.SplatterLogo
	Logo = app.components.header.els.Logo
	SplatterTop = app.components.header.els.SplatterTop
	Drop = app.components.header.els.Drop
	Line = app.components.header.els.Line
	Brain = app.components.header.els.Brain
	LogoLabel = app.components.header.els.LogoLabel
	BrainArrow = app.components.header.els.BrainArrow
	Quote = app.components.header.els.Quote
	Symbols = app.components.header.els.Symbols
	AnimText = app.components.header.els.AnimText

	config:->
		#shortcuts
		@Assets = app.config.Assets
		@image_assets = @Assets.header.images
		@animation_assets = @Assets.header.animations

		#variables
		@assets_loaded = 0
		@total_assets = Object.keys(@Assets.header.images).length + Object.keys(@Assets.header.animations).length
		@bg
		@splatter_logos
		@logo
		@splatter_top
		@top_stripe
		@brain_arrow
		@brain
		@logo_label
		@symbols
		@quote
		@quote_text = document.createElement "p"
		@text_top = new AnimText "C:CODEMAN/WEBSITE", "#000"
		@text_logo = new AnimText "CREATIVE CODER"
		@bit_text_01 = new AnimText "011010101101101001", "#e54c6b"
		@bit_text_02 = new AnimText "011010101101101001", "#e54c6b"
		@bit_text_03 = new AnimText "011010101101101001", "#e54c6b"
		@drop_01 = new Drop 60, 140, 1
		@drop_02 = new Drop 43, 122, 0.6
		@drop_03 = new Drop 90, 125, 0.6
		@drop_04 = new Drop 66, 100, 0.7
		@drop_line = new Line 55, 93, 60, "#ee1d23"
		@top_line_01 = new Line 754, 0, 53, "#ee1d23"
		@top_line_02 = new Line 775, 0, 80, "#ee1d23"
		@top_line_03 = new Line 807, 0, 160, "#000", false
		@top_line_04 = new Line 823, 0, 130, "#000", false
		@label_line_01 = new Line 210, 57, 160, "#ee1d23"
		@label_line_02 = new Line 266, 95, 50, "#ee1d23"

		#events
		@loaded = new signals.Signal

	constructor:(canvas_id)->
		@canvas = document.getElementById canvas_id
		@config()

		@load_all_assets()

	add_events:->
		

	in:->
		@stage = new Stage @canvas
		Ticker.setFPS 30
		Ticker.addListener @stage

		@add_events()

		@add_el @bg
		setTimeout (=>
			@start_in_queue()
		), 300

	config_index:->
		@add_child @bg
		@add_child @splatter_logo
		@add_child @splatter_top
		@add_child @top_stripe
		@label_line_01.add_at @stage
		@label_line_02.add_at @stage
		@add_child @logo_label
		@add_child @brain_arrow
		@add_child @bit_text_03
		@add_child @bit_text_01
		@add_child @bit_text_02
		@add_child @brain
		@add_child @logo
		@drop_line.add_at @stage
		@add_drops()
		@top_line_01.add_at @stage
		@top_line_02.add_at @stage
		@top_line_03.add_at @stage
		@top_line_04.add_at @stage
		@add_child @symbols
		@add_child @quote
		@add_child @text_top
		@add_child @text_logo

		@text_top.x = 140
		@text_top.y = 25

		@text_logo.x = 257
		@text_logo.y = 90

		@bit_text_01.x = 150
		@bit_text_01.y = 165

		@bit_text_02.x = 150
		@bit_text_02.y = 182

		@bit_text_03.x = 358
		@bit_text_03.y = 175

		@quote_text.className = "quote"
		@quote_text.innerText = "Real programmers don't comment their code. It was hard to write, it should be hard to understand. "

		@canvas.parentNode.appendChild @quote_text

	start_in_queue:->

		@config_index()

		@add_el @splatter_logo

		setTimeout (=>
			@add_el @splatter_top, =>
				setTimeout (=>
					@add_el @top_stripe
				), 150
		), 350

		@top_line_01.in()
		@top_line_02.in()
		@top_line_03.in()
		@top_line_04.in()
		@label_line_01.in()
		@label_line_02.in()
		@drop_line.in()

		@text_top.in()

		@text_logo.in()

		@bit_text_01.in()

		@bit_text_02.in()

		@bit_text_03.in()

		@add_el @brain
		@add_el @logo

	add_el:(el, callback)->
		el.in(callback)

	add_drops:->
		@drop_01.add_at @stage
		@drop_02.add_at @stage
		@drop_03.add_at @stage
		@drop_04.add_at @stage


	load_all_assets:(callback)->

		#LOAD IMAGES

		@load_image @image_assets.symbols, (img)=>
			@symbols = new Symbols img

		@load_image @image_assets.quote, (img)=>
			@quote = new Quote img

		@load_image @image_assets.bg, (img)=>
			@bg = new Background img

		@load_image @image_assets.brain_arrow, (img)=>
			@brain_arrow = new BrainArrow img

		@load_image @image_assets.top_stripe, (img)=>
			@top_stripe = new TopStripe img

		@load_image @image_assets.logo_label, (img)=>
			@logo_label = new LogoLabel img

		@load_image @image_assets.drop, (img)=>
			@drop_01.add_drop img
			@drop_02.add_drop img
			@drop_03.add_drop img
			@drop_04.add_drop img

		@load_image @image_assets.drop_bg, (img)=>
			@drop_01.add_bg img
			@drop_02.add_bg img
			@drop_03.add_bg img
			@drop_04.add_bg img

		#LOAD ANIMATIONS
		@load_animation @animation_assets.splatter_logo, (data, spritesheet)=>
			@splatter_logo = new SplatterLogo spritesheet

		@load_animation @animation_assets.logo, (data, spritesheet)=>
			@logo = new Logo spritesheet

		@load_animation @animation_assets.splatter_header, (data, spritesheet)=>
			@splatter_top = new SplatterTop spritesheet

		@load_animation @animation_assets.brain, (data, spritesheet)=>
			@brain = new Brain spritesheet

	load_image:(image_url,callback)->
		img = new Image
		img.src = image_url
		img.onload = =>
			@assets_loaded++
			callback?(img)
			@dispatch_loaded()

	load_animation:(asset_url,callback)->
		load_json asset_url, (data)=>
			@assets_loaded++
			spritesheet = new SpriteSheet data
			callback?(data,spritesheet)
			@dispatch_loaded()

	dispatch_loaded:->
		if @assets_loaded is @total_assets
			@loaded.dispatch()
			@in()

	add_child:(obj)->
		@stage.addChild obj
		@stage.update()

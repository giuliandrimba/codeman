#<< app/ui/header/els/base/bitmap_el

class Drop extends app.ui.header.els.base.BitmapEl

	BitmapEl = app.ui.header.els.base.BitmapEl
	img = "/images/header/drop.png"
	img_bg = "/images/header/drop-bg.png"
	angle : 1.1
	old_dist:0

	constructor:(x, y, scale, stage)->
		@stage = stage
		@x = x
		@y = y
		@scale = scale
		@assets = 2
		super()
		@_assets_ready = 0

		@drop_bg = new BitmapEl
		@drop_bg.url = img_bg
		@drop_bg.ready.add @_asset_ready
		@drop = new BitmapEl
		@drop.url = img
		@drop.ready.add @_asset_ready

	init:->
		@drop.init()
		@drop_bg.init()

	in:()->

		_delay = (Math.random() * .7) + 1.3

		@stage.addChild @drop_bg
		@drop_bg.alpha = 0
		@drop_bg.x = @x + 5
		@drop_bg.y = @y - 15
		@drop_bg.scaleX = @drop_bg.scaleY = @scale

		TweenLite.to(@drop_bg, .5, {alpha:1, y:@y + 10, ease:Quad.easeOut, delay:_delay});

		@stage.addChild @drop
		@drop.alpha = 0
		@drop.x = @x
		@drop.y = @y - 15
		@drop.scaleX = @drop.scaleY = @scale

		TweenLite.to(@drop, .5, {alpha:1, y:@y + 5, ease:Quad.easeOut, delay:_delay, onComplete:@_animDropTicker});

		@_done()

	_animDropTicker:=>
		Ticker.addListener @_animDrop

	_animDrop:=>
		@drop.y = @y + (Math.sin(@angle) * 5)
		@drop_bg.y = (@y + 5) + (Math.sin(@angle) * 5)
		@angle += .1

	_asset_ready:=>
		@_assets_ready += 1
		@ready.dispatch() if @_assets_ready is @assets
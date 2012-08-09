#<< app/ui/header/els/base/bitmap_el

class Drop extends app.ui.header.els.base.BitmapEl

	BitmapEl = app.ui.header.els.base.BitmapEl
	img = "/images/header/drop.png"
	img_bg = "/images/header/drop-bg.png"

	constructor:(x, y, scale)->
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
		@stage.addChild @drop_bg
		@drop_bg.x = @x + 5
		@drop_bg.y = @y + 5
		@drop_bg.scaleX = @drop_bg.scaleY = @scale

		@stage.addChild @drop
		@drop.x = @x
		@drop.y = @y
		@drop.scaleX = @drop.scaleY = @scale

		@_done()

	_asset_ready:=>
		@_assets_ready += 1
		console.log "drop #{@_assets_ready} #{@assets}"
		@ready.dispatch() if @_assets_ready is @assets
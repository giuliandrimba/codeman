#<< app/ui/header/els/base/bitmap_el

class Symbols extends app.ui.header.els.base.BitmapEl

	url:"/images/header/symbols.png"

	constructor:->
		super()

	in:()->
		@stage.addChild @
		@alpha = 0
		@x = 650
		@y = 10

		TweenLite.to(@, .5, {alpha:1, ease:Quad.easeOut, delay:1});
		
		@_done()
		
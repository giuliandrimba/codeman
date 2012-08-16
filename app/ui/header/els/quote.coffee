#<< app/ui/header/els/base/bitmap_el

class Quote extends app.ui.header.els.base.BitmapEl

	url:"/images/header/quote-flag.png"

	constructor:->
		super()

	in:()->
		@stage.addChild @
		@alpha = 0
		@x = 870
		@y = -300

		TweenLite.to(@, 3.5, {alpha:1,y:0, ease:Quart.easeInOut, delay:2});

		@_done()

#<< app/ui/header/els/base/bitmap_el

class Quote extends app.ui.header.els.base.BitmapEl

	url:"/images/header/quote-flag.png"

	constructor:->
		super()

	in:()->
		@stage.addChild @
		@x = 870
		@y = 0
		@_done()

#<< app/ui/header/els/base/bitmap_el

class Symbols extends app.ui.header.els.base.BitmapEl

	url:"/images/header/symbols.png"

	constructor:->
		super()

	in:()->
		@stage.addChild @
		@x = 650
		@y = 10
		@_done()
		
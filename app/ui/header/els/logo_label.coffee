#<< app/ui/header/els/base/bitmap_el

class LogoLabel extends app.ui.header.els.base.BitmapEl

	url:"/images/header/logo-text.png"

	constructor:->
		super()

	in:()->
		@stage.addChild @
		@x = 209
		@y = 100
		@_done()


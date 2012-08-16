#<< app/ui/header/els/base/bitmap_el

class LogoLabel extends app.ui.header.els.base.BitmapEl

	url:"/images/header/logo-text.png"

	constructor:->
		super()

	in:()->
		@stage.addChild @
		@alpha = 0
		@x = 209
		@y = 100

		TweenLite.to(@, .5, {alpha:1, ease:Quad.easeOut, delay:1.3});

		@_done()


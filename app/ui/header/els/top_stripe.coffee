#<< app/ui/header/els/base/bitmap_el

class TopStripe extends app.ui.header.els.base.BitmapEl

	url:"/images/header/top-stripe.png"

	constructor:->
		super()

	in:()->
		@stage.addChild @
		@x = 100
		@alpha = 0
		TweenLite.to(@, .5, {alpha:1, ease:Quad.easeOut});
		@_done()
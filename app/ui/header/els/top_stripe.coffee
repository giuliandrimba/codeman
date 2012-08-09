#<< app/ui/header/els/base/bitmap_el

class TopStripe extends app.ui.header.els.base.BitmapEl

	url:"/images/header/top-stripe.png"

	constructor:->
		super()

	in:()->
		@stage.addChild @
		@x = 100
		@alpha = 0
		Tween.get(@).to({alpha:1}, 500, Ease.quadOut);
		@_done()
#<< app/ui/header/els/base/bitmap_el

class BrainArrow extends app.ui.header.els.base.BitmapEl

	url:"/images/header/brain-arrow.png"

	constructor:->
		super()

	in:()->
		@stage.addChild @
		@alpha = 0
		@x = 190
		@y = 66

		TweenLite.to(@, .5, {alpha:1, ease:Quad.easeOut, delay:1});
		@_done()

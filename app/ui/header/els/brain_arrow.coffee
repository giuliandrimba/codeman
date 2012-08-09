#<< app/ui/header/els/base/bitmap_el

class BrainArrow extends app.ui.header.els.base.BitmapEl

	url:"/images/header/brain-arrow.png"

	constructor:->
		super()

	in:()->
		@stage.addChild @
		@x = 190
		@y = 66

		Tween.get(@).to({alpha:1}, 1000, Ease.quadOut);
		@_done()

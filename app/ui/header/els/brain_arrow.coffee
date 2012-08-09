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

		Tween.get(@).wait(1000).to({alpha:1}, 500, Ease.quadOut);
		@_done()

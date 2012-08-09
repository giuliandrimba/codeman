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

		Tween.get(@).wait(2000).to({y:0,alpha:1}, 3500, Ease.quartInOut);

		@_done()

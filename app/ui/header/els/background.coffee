#<< app/ui/header/els/base/bitmap_el

class Background extends app.ui.header.els.base.BitmapEl

	url:"/images/header/bg-header.jpg"

	constructor:()->
		super()

	in:(callback)->
		@stage.addChild @
		@alpha = 0
		Tween.get(@).to({alpha:1}, 1000, Ease.quadOut);
		@_done()

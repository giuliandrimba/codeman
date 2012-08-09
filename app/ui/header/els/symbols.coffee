#<< app/ui/header/els/base/bitmap_el

class Symbols extends app.ui.header.els.base.BitmapEl

	url:"/images/header/symbols.png"

	constructor:->
		super()

	in:()->
		@stage.addChild @
		@alpha = 0
		@x = 650
		@y = 10

		Tween.get(@).wait(1000).to({alpha:1}, 500, Ease.quadOut);
		
		@_done()
		
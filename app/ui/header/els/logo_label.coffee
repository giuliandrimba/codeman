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

		Tween.get(@).wait(1300).to({alpha:1}, 500, Ease.quadOut);

		@_done()


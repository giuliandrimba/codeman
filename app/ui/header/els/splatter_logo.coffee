#<< app/ui/header/els/base/anim_el

class SplatterLogo extends app.ui.header.els.base.AnimEl

	url:"/animations/header/splatter_logo.json"

	constructor:()->
		super()

	in:()->
		@stage.addChild @
		@y = 0
		@gotoAndPlay "intro"
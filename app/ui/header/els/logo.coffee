#<< app/ui/header/els/base/anim_el

class Logo extends app.ui.header.els.base.AnimEl

	url:"/animations/header/logo.json"

	constructor:->
		super()

	in:(callback)->
		@stage.addChild @
		@y = 50
		@x = 105
		@gotoAndPlay "intro"
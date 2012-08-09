#<< app/ui/header/els/base/anim_el

class SplatterTop extends app.ui.header.els.base.AnimEl

	url:"/animations/header/bg-header-topright.json"

	constructor:(spritesheet)->
		super()

	in:()->
		@stage.addChild @
		@y = 0
		@x = 660
		@gotoAndPlay "intro"
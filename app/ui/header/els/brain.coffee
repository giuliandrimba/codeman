#<< app/ui/header/els/base/anim_el

class Brain extends app.ui.header.els.base.AnimEl

	url:"/animations/header/brain.json"

	constructor:()->
		super()

	in:()->
		@stage.addChild @
		@alpha = 0
		@x = 177
		@y = 90
		@gotoAndStop 1

		Tween.get(@).wait(1000).to({alpha:1}, 500, Ease.quadOut);

		@onAnimationEnd = (anim, name)->
			anim.paused = true
			anim.currentAnimationFrame = anim.spriteSheet.getNumFrames() - 1

		interval = setInterval((=>
			@gotoAndPlay "blink"
		), 20000)

		@_done()
		
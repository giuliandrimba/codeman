class Logo extends BitmapAnimation

	constructor:(img)->
		@initialize img

		@y = 50
		@x = 105

		@onAnimationEnd = (anim, name)->
			anim.paused = true
			anim.currentAnimationFrame = anim.spriteSheet.getNumFrames() - 1
			@callback?()

	in:(callback)->
		@callback = callback
		@gotoAndPlay "intro"
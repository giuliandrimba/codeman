class Brain extends BitmapAnimation

	constructor:(spritesheet)->
		@initialize spritesheet

		@x = 177
		@y = 90

		@onAnimationEnd = (anim, name)->
			anim.paused = true
			anim.currentAnimationFrame = anim.spriteSheet.getNumFrames() - 1
			@callback?()

	in:(callback)->
		@callback = callback
		@gotoAndStop 1
		
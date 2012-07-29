class SplatterTop extends BitmapAnimation

	constructor:(spritesheet)->
		@initialize spritesheet

		@y = 0
		@x = 660

		@onAnimationEnd = (anim, name)->
			anim.paused = true
			anim.currentAnimationFrame = anim.spriteSheet.getNumFrames() - 1
			@callback?()

	in:(callback)->
		@callback = callback
		@gotoAndPlay "intro"
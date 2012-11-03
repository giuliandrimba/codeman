class AnimEl extends BitmapAnimation

	constructor:()->
		@ready = new signals.Signal
		@showed = new signals.Signal
		@stage = null

		@onAnimationEnd = (anim, name)->
			anim.paused = true
			anim.currentAnimationFrame = anim.spriteSheet.getNumFrames() - 1
			@_done()

	in:->
		@stage.addChild @

	init:=>
		load_json @url, (data)=>
			spritesheet = new SpriteSheet data
			@initialize spritesheet
			setTimeout( =>
				@ready.dispatch()
			, 1000)

	_done:()->
		@stage.update()
		@showed.dispatch()
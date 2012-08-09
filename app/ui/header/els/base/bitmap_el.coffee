class BitmapEl extends Bitmap

	constructor:->
		@ready = new signals.Signal
		@showed = new signals.Signal
		@stage = null

	in:->
		
	init:->
		img = new Image
		img.src = @url
		img.onload = =>
			@initialize img
			@ready.dispatch()

	_done:()->
		@stage.update()
		@showed.dispatch()
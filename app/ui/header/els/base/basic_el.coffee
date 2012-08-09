class BasicEl

	constructor:()->
		@ready = new signals.Signal
		@showed = new signals.Signal
		@stage = null
		@ready.dispatch()

	init:->
		@ready.dispatch()

	in:->

	_done:()->
		@stage.update()
		@showed.dispatch()
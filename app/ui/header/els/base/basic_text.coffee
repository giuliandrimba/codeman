class BasicText extends Text

	constructor:(text, color)->
		
		@ready = new signals.Signal
		@showed = new signals.Signal
		@stage = null

	init:->
		@ready.dispatch()

	in:->

	_done:()->
		@stage.update()
		@showed.dispatch()
#<< app/config/*

class Intro

	can_run = false
	current_in = 0

	constructor:(@stage)->
		@commands = []
		@total_els = 0
		@els_ready = 0
		@ready = new signals.Signal

	add:(el)->
		@total_els++
		el.ready.add @_el_ready
		el.showed.add @_next_in
		el.stage = @stage
		el.init()
		@commands.push el

	run:->
		if @els_ready < (@total_els - 1)
			can_run = true
			return

		@_in()

	_in:->
		console.log @commands[current_in]
		@commands[current_in].in()

	_next_in:=>
		current_in++
		@_in() if current_in <= (@total_els - 1)

	_el_ready:=>
		@els_ready++
		console.log "loaded #{@els_ready} | total #{@total_els}"
		if @els_ready is @total_els
			@ready.dispatch()
			@_in() if can_run
		
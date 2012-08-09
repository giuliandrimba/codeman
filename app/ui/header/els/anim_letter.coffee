class AnimLetter

	_alphabet : ["a","b","c","d","e","f","s","e","x","j","k","l","n","o","w","p","q","$"]
	_iteration : 0
	_delay = 0
	_completed:false

	on_complete : ()->
		#

	constructor:(letter)->
		@letter = letter

	tween:(txt, delay)->
		@_delay = delay
		@txt = txt
		@txt.text += @letter
		@txt_letters = txt.text.split("")
		@last_pos = @txt_letters.length - 1
		@txt_letters[@last_pos] = @letter


		@tick = =>
			@ticker = window.requestAnimationFrame @tick

			if @_iteration >= (@_alphabet.length - @_delay) and !@_completed
				@_completed = true
				@on_complete()

			if @_iteration >= @_alphabet.length
				@txt_letters = @txt.text.split("")
				@txt_letters[@last_pos] = @letter
				@txt.text = @txt_letters.join("").toUpperCase()
				window.cancelAnimationFrame @ticker
				return

			@change()

		@tick()
		@

	change:->
		@txt_letters = @txt.text.split("")
		@txt_letters[@last_pos] = @_alphabet[ @random_letter() ]
		@txt.text = @txt_letters.join("").toUpperCase()
		@_iteration++

	random_letter:->
		rnd = Math.floor((Math.random()*@_alphabet.length)+0);
		rnd

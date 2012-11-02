#<< app/ui/header/els/anim_letter
#<< app/ui/header/els/base/basic_text

class AnimText extends app.ui.header.els.base.BasicText

	AnimLetter = app.ui.header.els.AnimLetter

	numbers = [0,1,2,3,4,5,6,7,8,9]
	text_letters = []
	current : 0
	total : 0
	_added = false

	constructor:(text,color, x, y)->
		super()
		@input_color = color
		@input_text = text
		@x = x
		@y = y
		@_init()

	_init:=>
		@initialize "", "12px OCRAStdRegular", @input_color
		@anim_letters = []
		@current = 0

		@anim_letters.push new AnimLetter(letter) for letter in @input_text

		@total = @anim_letters.length

	in:->
		delay = (Math.random() * 700) + 1800

		@stage.addChild @

		setTimeout (=>
			@tween(true)
		), delay
		
		@_done()

	tween:(init)->
		@anim_letters[@current].tween(@,10, init).on_complete = =>
			@current++
			if @current < @total
				@tween() 
				return

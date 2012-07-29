#<< app/components/header/els/anim_letter

class AnimText extends Text

	AnimLetter = app.components.header.els.AnimLetter

	numbers = [0,1,2,3,4,5,6,7,8,9]
	text_letters = []
	current : 0
	total : 0

	constructor:(text,color)->
		@initialize text, "12px OCRAStdRegular", color
		@text = ""

		@anim_letters = []

		@anim_letters.push new AnimLetter(letter) for letter in text
		
		@total = @anim_letters.length

	in:(done)->

		@anim_letters[@current].tween(@,10).on_complete = =>
			@current++
			@in() if @current < @total

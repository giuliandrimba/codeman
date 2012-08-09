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
		@initialize text, "12px OCRAStdRegular", color
		@text = ""
		@anim_letters = []

		@anim_letters.push new AnimLetter(letter) for letter in text
	
		@total = @anim_letters.length

	in:->
		@stage.addChild @
		console.log "ADD TEXT"

		@tween =>
			console.log "DONE"
		
		@_done()

	tween:(done)->
		@anim_letters[@current].tween(@,10).on_complete = =>
			@current++
			if @current < @total
				@tween() 
				return

			done?()

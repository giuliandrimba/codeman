#<< app/ui/header/els/base/bitmap_el

class Quote extends app.ui.header.els.base.BitmapEl

	url:"/images/header/quote-flag.png"
	phrases : []

	constructor:->
		@phrases = []
		super()

	in:()->
		@stage.addChild @
		@alpha = 0
		@x = 870
		@y = -300

		TweenLite.to @, 3.5, {alpha:1,y:0, ease:Quart.easeInOut, delay:2, onComplete:@_load_quote}

		setInterval(=>
			@_show_quote()
		,30000)

		@_done()

	_show_quote:=>
		TweenLite.to $(".quote"), 1, {css:{opacity:0},ease:Quart.easeInOut, onComplete: @_get_quote}

	_load_quote:=>
		$.ajax(
			url: "data/quotes.json"
			cache: false,
			dataType:"json",
			type:"GET",
			success:(data)=>
				@phrases = data
				@_get_quote()
			)

	_get_quote:=>
		rndPhrase = Math.floor(Math.random() * @phrases.length)
		phrase = @phrases[0]
		if(phrase)
			$(".quote").find(".author").text "- #{phrase.author}"
			$(".quote").find(".text").text phrase.text
			TweenLite.to $(".quote"), 1, {css:{opacity:1},ease:Quart.easeInOut}


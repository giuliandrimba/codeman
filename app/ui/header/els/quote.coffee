#<< app/ui/header/els/base/bitmap_el

class Quote extends app.ui.header.els.base.BitmapEl

	url:"/images/header/quote-flag.png"

	constructor:->
		super()

	in:()->
		@stage.addChild @
		@alpha = 0
		@x = 870
		@y = -300

		TweenLite.to(@, 3.5, {alpha:1,y:0, ease:Quart.easeInOut, delay:2, onComplete:@_showQuote});

		@_done()

	_showQuote:=>
		$.ajax(
			url: "data/quotes.json"
			cache: false,
			dataType:"json",
			type:"GET",
			success:(data)->
				rndPhrase = Math.floor(Math.random() * data.length)
				phrase = data[rndPhrase]
				$(".quote").find(".author").text("- " + phrase.author)
				$(".quote").find(".text").text("" + phrase.text + "")
				TweenLite.to($(".quote"), 1, {css:{opacity:1},ease:Quart.easeInOut});
			)


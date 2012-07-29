class TopStripe extends Bitmap

	constructor:(img)->
		@initialize img
		@x = 100
		@alpha = 0

	in:(callback)->
		Tween.get(@).to({alpha:1}, 500, Ease.quadOut);
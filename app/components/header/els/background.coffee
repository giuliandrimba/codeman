class Background extends Bitmap

	constructor:(img)->
		@initialize img
		@alpha = 0

	in:(callback)->
		Tween.get(@).to({alpha:1}, 1000, Ease.quadOut);

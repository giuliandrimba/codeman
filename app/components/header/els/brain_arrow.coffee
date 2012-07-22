class BrainArrow extends Bitmap

	constructor:(img)->
		@initialize img
		@x = 190
		@y = 66

	in:(callback)->
		Tween.get(@).to({alpha:1}, 1000, Ease.quadOut);

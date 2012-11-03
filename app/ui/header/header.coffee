#<< app/ui/header/els/*
#<< app/ui/header/intro

class Header

	Intro = app.ui.header.Intro

	Background = app.ui.header.els.Background
	TopStripe = app.ui.header.els.TopStripe
	SplatterLogo = app.ui.header.els.SplatterLogo
	Logo = app.ui.header.els.Logo
	SplatterTop = app.ui.header.els.SplatterTop
	Drop = app.ui.header.els.Drop
	Line = app.ui.header.els.Line
	Brain = app.ui.header.els.Brain
	LogoLabel = app.ui.header.els.LogoLabel
	BrainArrow = app.ui.header.els.BrainArrow
	Quote = app.ui.header.els.Quote
	Symbols = app.ui.header.els.Symbols
	AnimText = app.ui.header.els.AnimText

	constructor:(canvas_id)->

		@ready = new signals.Signal

		@canvas = document.getElementById canvas_id
		@stage = new Stage @canvas
		Ticker.setFPS 30
		Ticker.addListener @stage

		@intro = new Intro @stage
		@intro.add new Background
		@intro.add new SplatterTop
		@intro.add new SplatterLogo
		@intro.add new Line 775, 0, 80, "#ee1d23"
		@intro.add new Line 807, 0, 160, "#000", false
		@intro.add new Line 823, 0, 130, "#000", false
		@intro.add new Line 210, 57, 150, "#ee1d23"
		@intro.add new Line 266, 95, 50, "#ee1d23"
		@intro.add new AnimText "011100110110010101111000", "#e54c6b", 390, 175
		@intro.add new AnimText "011011100110111101110111", "#e54c6b", 150, 165
		@intro.add new AnimText "011001110110100101110100", "#e54c6b", 150, 182
		@intro.add new AnimText "C:CODEMAN/WEBSITE", "#000", 140, 25
		@intro.add new AnimText "INTERACTIVE DEVELOPER", "#000", 257, 90
		@intro.add new LogoLabel
		@intro.add new BrainArrow
		@intro.add new Brain
		@intro.add new Logo
		@intro.add new TopStripe
		@intro.add new Line 55, 93, 60, "#ee1d23"
		@intro.add new Line 754, 0, 53, "#ee1d23"
		@intro.add new Drop 60, 140, 1, @stage
		@intro.add new Drop 43, 122, 0.6, @stage
		@intro.add new Drop 90, 125, 0.6, @stage
		@intro.add new Drop 66, 100, 0.7, @stage
		@intro.add new Symbols
		@intro.add new Quote

		@intro.ready.add @on_ready

	in:->
		setTimeout(=>
			$("#preloader").hide()
			@intro.run()
		,3000)

	on_ready:=>
		@ready.dispatch()

		
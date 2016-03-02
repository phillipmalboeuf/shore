class Daniela.Views.Track extends Daniela.View


	events: {
		"click [data-show-fullscreen]": "show_fullscreen"
		"click .js-hide_fullscreen": "hide_fullscreen"
	}



	initialize: (options={})->

		super()



	render: ->

		super()



	show_fullscreen: (e)->
		e.preventDefault()
		e.stopImmediatePropagation()

		this.$el.find(".js-fullscreen").addClass "overlay--show"
		this.$el.find(".js-fullscreen_iframe").attr "src", e.currentTarget.getAttribute("data-show-fullscreen")+"?autoplay=1&color=white"


	hide_fullscreen: (e)->
		this.$el.find(".js-fullscreen").removeClass "overlay--show"

		setTimeout =>
			this.$el.find(".js-fullscreen_iframe").attr "src", ""
		, 666





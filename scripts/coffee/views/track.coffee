class Daniela.Views.Track extends Daniela.View


	events: {
		"click [data-show-fullscreen]": "show_fullscreen"
	}



	initialize: (options={})->

		super()



	render: ->

		super()



	show_fullscreen: (e)->
		e.preventDefault()
		e.stopImmediatePropagation()
		
		this.$el.find(".js-fullscreen_iframe").attr "src", e.currentTarget.getAttribute("data-show-fullscreen")
		this.$el.find(".js-fullscreen").addClass "overlay--show"

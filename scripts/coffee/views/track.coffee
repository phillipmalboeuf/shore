class Daniela.Views.Track extends Daniela.View


	events: {
		"click [data-show-fullscreen]": "show_fullscreen"
	}



	initialize: (options={})->

		super()



	render: ->

		super()



	show_fullscreen: (e)->
		src_url = e.currentTarget.getAttribute("data-show-fullscreen")

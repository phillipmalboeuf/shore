class Daniela.Views.Footer extends Daniela.View


	events: {
		"click .js-credits_button": "toggle_credits"
	}



	initialize: (options={})->


		super()



	render: ->


		super()



	toggle_credits: (e)->

		credits = this.$el.find("#credits")
		credits.removeClass "hide"

		setTimeout ->
			credits.addClass "overlay--show"
		, 10





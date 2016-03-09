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
		credits.toggleClass "hide"

		setTimeout ->
			credits.toggleClass "overlay--show"
		, 10



		

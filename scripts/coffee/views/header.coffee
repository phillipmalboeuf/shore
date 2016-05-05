class Daniela.Views.Header extends Daniela.View


	events: {

	}


	previous_offset: 0



	initialize: (options={})->


		super()



	render: ->

		super()



	check_offset: ->
		if window.pageYOffset > 0
			if window.pageYOffset > this.previous_offset
				if not this.$el.hasClass "header--hide"
					this.$el.addClass "header--hide"

			else 
				if this.$el.hasClass "header--hide"
					this.$el.removeClass "header--hide"			


		this.previous_offset = window.pageYOffset







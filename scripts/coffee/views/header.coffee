class Daniela.Views.Header extends Daniela.View


	events: {

	}


	previous_offset: 0



	initialize: (options={})->


		super()



	render: ->
		header = this.$el



		super()


	check_offset: ->
		if window.pageYOffset > 0
			if window.pageYOffset > this.previous_offset
				if not header.hasClass "header--hide"
					header.addClass "header--hide"

			else 
				if header.hasClass "header--hide"
					header.removeClass "header--hide"			


		this.previous_offset = window.pageYOffset

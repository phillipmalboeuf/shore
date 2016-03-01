class Daniela.Views.Header extends Daniela.View


	events: {

	}



	initialize: (options={})->


		this.render()



	render: ->
		header = this.$el

		previous_offset = 0
		$(window).scroll (e)->
			console.log window.pageYOffset
			if window.pageYOffset > previous_offset
				if not header.hasClass "header--hide"
					header.addClass "header--hide"

			else 
				if header.hasClass "header--hide"
					header.removeClass "header--hide"			


			previous_offset = window.pageYOffset


		this

class Daniela.Views.Header extends Daniela.View


	events: {

	}


	request_frame: window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame




	initialize: (options={})->


		super()



	render: ->
		@header = this.$el
		@previous_offset = 0

		$(window).scroll (e)=>
			this.request_frame(this.toggle_header)


		super()



	toggle_header: ->
		if window.pageYOffset > @previous_offset
			if not @header.hasClass "header--hide"
				@header.addClass "header--hide"

		else 
			if @header.hasClass "header--hide"
				@header.removeClass "header--hide"			


		@previous_offset = window.pageYOffset





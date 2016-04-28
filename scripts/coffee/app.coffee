

window.Daniela =
	Collections:{}
	Models:{}
	Views:{}
	Routers:{}


	settings:{}



	init: (settings)->
		_.extend @settings, settings if settings?


		console.log "I like this digital age."


		@header_views = []
		$(".js-header").each (index, el)=>
			@header_views.push new Daniela.Views.Header({el: el})

		@footer_views = []
		$(".js-footer").each (index, el)=>
			@footer_views.push new Daniela.Views.Footer({el: el})


		@track_views = []
		$(".js-track").each (index, el)=>
			@track_views.push new Daniela.Views.Track({el: el})


		@social_links_views = []
		$(".js-social_links").each (index, el)=>
			@social_links_views.push new Daniela.Views.SocialLinks({el: el})



		@views = []
		$(".js-view").each (index, el)=>
			@views.push new Daniela.View({el: el})


		$(document).on "touch", (e)->
			console.log e.currentTarget

		# $(window).on "keyup", (e)->
		# 	if e.keyCode == 27
		# 		$(".overlay--show").removeClass "overlay--show"
		# 		setTimeout ->
		# 			$(".js-fullscreen_iframe").attr "src", ""
		# 		, 666



		# @router = new Daniela.Routers.Router()
		# Backbone.history.start
		# 	pushState: true

		
	


		
		

Daniela = window.Daniela
_ = window._
Backbone = window.Backbone
jQuery = window.jQuery




$ ->
	$("#video_index").attr("data-video-src", "https://vimeo.com/"+window.index_video_id)

	Daniela.init(window.saturdays_settings)





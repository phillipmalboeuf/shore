

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
			@header_views.push new Daniela.Views.Header({el: $(el)})


		@track_views = []
		$(".js-track").each (index, el)=>
			@track_views.push new Daniela.Views.Track({el: $(el)})


		@social_links_views = []
		$(".js-social_links").each (index, el)=>
			@social_links_views.push new Daniela.Views.SocialLinks({el: $(el)})



		@views = []
		$(".js-view").each (index, el)=>
			@views.push new Daniela.View({el: $(el)})

		
	


		
		

Daniela = window.Daniela
_ = window._
Backbone = window.Backbone
jQuery = window.jQuery




$ ->
	Daniela.init(window.saturdays_settings)

	if window.header_video_id?
		video_header = $("#video_header")
		if video_header.length > 0
			window.setup_video(video_header[0], window.header_video_id, "video_header")
			






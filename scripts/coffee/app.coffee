

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


		@social_links_views = []
		$(".js-social_links").each (index, el)=>
			@social_links_views.push new Daniela.Views.SocialLinks({el: $(el)})

		
	


		
		

Daniela = window.Daniela
_ = window._
Backbone = window.Backbone
jQuery = window.jQuery




$ ->
	Daniela.init(window.saturdays_settings)




$ ->


	$("[data-hide-overlay]").click (e)->
		$("#"+e.currentTarget.getAttribute("data-hide-overlay")).removeClass "overlay--show"


	if window.header_video_id?
		video_header = $("#video_header")
		if video_header.length > 0
			window.setup_video(video_header[0], window.header_video_id, "video_header")
			

	$("[data-video-src]").each ->
		window.setup_video(this, $(this).attr("data-video-src").split("//vimeo.com/")[1], this.id)



window.setup_video = (frame, video_id, player_id)->
	$(frame).attr "src", "https://player.vimeo.com/video/"+video_id+"?api=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&autopause=0&background=1&player_id="+player_id

	player = $f(frame)
	player.addEvent "ready", ->
		player.addEvent "play", ->
			$(frame).removeClass "fade_out"






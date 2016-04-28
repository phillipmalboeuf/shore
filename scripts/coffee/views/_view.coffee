class Daniela.View extends Backbone.View

	events: {}


	initialize: (options={})->
		this.events["click [data-scroll-to]"] = "scroll_to"
		this.events["click [data-hide-overlay]"] = "hide_overlay"

		this.render()



	render: ->
		this.delegateEvents()

		this



	scroll_to: (e)->
		console.log e.currentTarget
		
		scroll_to_id = "#"+e.currentTarget.getAttribute("data-scroll-to")
		scroll_to = $(scroll_to_id)

		if scroll_to.length > 0
			e.preventDefault()
			e.stopImmediatePropagation()

			if scroll_to.hasClass("overlay")
				scroll_to.addClass "overlay--show"

			else				
				scroll_to.velocity("scroll", { duration: 2000, easing: "easeOutQuart" }) 



	hide_overlay: (e)->
		$("#"+e.currentTarget.getAttribute("data-hide-overlay")).removeClass "overlay--show"

		
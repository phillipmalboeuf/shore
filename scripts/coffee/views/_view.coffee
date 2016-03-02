class Daniela.View extends Backbone.View

	events: {}


	initialize: (options={})->
		this.events["click [data-scroll-to]"] = "scroll_to"

		this.render()



	render: ->
		this.delegateEvents()

		this



	scroll_to: (e)->
		scroll_to = $("#"+e.currentTarget.getAttribute("data-scroll-to"))

		if scroll_to.length > 0
			e.preventDefault()
			e.stopImmediatePropagation()

			if scroll_to.hasClass("overlay")
				scroll_to.addClass "overlay--show"

			else				
				scroll_to.velocity("scroll", { duration: 2000, easing: "easeOutQuart" }) 
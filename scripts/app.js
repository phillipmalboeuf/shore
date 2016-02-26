(function() {
  $(function() {
    var header_video, video_options;
    console.log("I like this digital age.");
    $("[data-scroll-to]").click(function(e) {
      var scroll_to;
      scroll_to = $("#" + e.currentTarget.getAttribute("data-scroll-to"));
      if (scroll_to.length > 0) {
        e.preventDefault();
        e.stopImmediatePropagation();
        if (scroll_to.hasClass("overlay")) {
          return scroll_to.addClass("overlay--show");
        } else {
          return scroll_to.velocity("scroll", {
            duration: 2000,
            easing: "easeOutQuart"
          });
        }
      }
    });
    $("[data-hide-overlay]").click(function(e) {
      return $("#" + e.currentTarget.getAttribute("data-hide-overlay")).removeClass("overlay--show");
    });
    video_options = window.header_video_id != null ? (header_video = $("#video_header"), header_video.length > 0 ? window.setup_video(header_video, window.header_video_id) : void 0) : void 0;
    return $("[data-video-src]").each(function() {
      return window.setup_video(this, $(this).attr("data-video-src").split("//vimeo.com/")[1]);
    });
  });

  window.setup_video = function(frame, id) {
    return $(frame).attr("src", "https://player.vimeo.com/video/" + id + "?" + "api=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&autopause=0");
  };

}).call(this);

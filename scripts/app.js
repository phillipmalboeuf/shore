(function() {
  $(function() {
    var video_header, video_options;
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
    return video_options = window.header_video_id != null ? (video_header = $("#video_header"), video_header.length > 0 ? window.setup_video(video_header[0], window.header_video_id, "video_header") : void 0) : void 0;
  });

  window.setup_video = function(frame, video_id, player_id) {
    $(frame).attr("src", "https://player.vimeo.com/video/" + video_id + "?api=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&autopause=0&player_id=" + player_id);
    return setTimeout(function() {
      var player;
      player = $f(frame);
      return player.addEvent("ready", function() {
        console.log("ready");
        return player.addEvent("play", function() {
          console.log("play");
          return $(frame).removeClass("fade_out");
        });
      });
    }, 200);
  };

}).call(this);

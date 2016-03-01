(function() {
  $(function() {
    var header, previous_offset, video_header, video_options;
    console.log("I like this digital age.");
    header = $(".js-header");
    previous_offset = 0;
    $(window).scroll(function(e) {
      console.log(window.pageYOffset);
      if (window.pageYOffset > previous_offset) {
        if (!header.hasClass("header--hide")) {
          header.addClass("header--hide");
        }
      } else {
        if (header.hasClass("header--hide")) {
          header.removeClass("header--hide");
        }
      }
      return previous_offset = window.pageYOffset;
    });
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
    video_options = window.header_video_id != null ? (video_header = $("#video_header"), video_header.length > 0 ? window.setup_video(video_header[0], window.header_video_id, "video_header") : void 0) : void 0;
    return $("[data-video-src]").each(function() {
      return window.setup_video(this, $(this).attr("data-video-src").split("//vimeo.com/")[1], this.id);
    });
  });

  window.setup_video = function(frame, video_id, player_id) {
    var player;
    $(frame).attr("src", "https://player.vimeo.com/video/" + video_id + "?api=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&autopause=0&background=1&player_id=" + player_id);
    player = $f(frame);
    return player.addEvent("ready", function() {
      return player.addEvent("play", function() {
        return $(frame).removeClass("fade_out");
      });
    });
  };

}).call(this);

(function() {
  _view.coffee;

}).call(this);

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Daniela.Views.Header = (function(superClass) {
    extend(Header, superClass);

    function Header() {
      return Header.__super__.constructor.apply(this, arguments);
    }

    Header.prototype.events = {};

    Header.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      return this.render();
    };

    Header.prototype.render = function() {
      var header, previous_offset;
      header = this.$el;
      previous_offset = 0;
      $(window).scroll(function(e) {
        console.log(window.pageYOffset);
        if (window.pageYOffset > previous_offset) {
          if (!header.hasClass("header--hide")) {
            header.addClass("header--hide");
          }
        } else {
          if (header.hasClass("header--hide")) {
            header.removeClass("header--hide");
          }
        }
        return previous_offset = window.pageYOffset;
      });
      return this;
    };

    return Header;

  })(Backbone.View);

}).call(this);

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Daniela.Views.Track = (function(superClass) {
    extend(Track, superClass);

    function Track() {
      return Track.__super__.constructor.apply(this, arguments);
    }

    Track.prototype.events = {};

    Track.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      return this.render();
    };

    Track.prototype.render = function() {
      return this;
    };

    return Track;

  })(Backbone.View);

}).call(this);

(function() {
  var Backbone, Daniela, _, jQuery;

  window.Daniela = {
    Collections: {},
    Models: {},
    Views: {},
    Routers: {},
    settings: {},
    init: function(settings) {
      if (settings != null) {
        _.extend(this.settings, settings);
      }
      console.log("I like this digital age.");
      this.header_views = [];
      $(".js-header").each((function(_this) {
        return function(index, el) {
          return _this.header_views.push(new Daniela.Views.Header({
            el: $(el)
          }));
        };
      })(this));
      this.track_views = [];
      $(".js-track").each((function(_this) {
        return function(index, el) {
          return _this.track_views.push(new Daniela.Views.Track({
            el: $(el)
          }));
        };
      })(this));
      this.social_links_views = [];
      $(".js-social_links").each((function(_this) {
        return function(index, el) {
          return _this.social_links_views.push(new Daniela.Views.SocialLinks({
            el: $(el)
          }));
        };
      })(this));
      this.views = [];
      return $(".js-view").each((function(_this) {
        return function(index, el) {
          return _this.views.push(new Daniela.View({
            el: $(el)
          }));
        };
      })(this));
    }
  };

  Daniela = window.Daniela;

  _ = window._;

  Backbone = window.Backbone;

  jQuery = window.jQuery;

  $(function() {
    $("#video_index").attr("data-video-src", "https://vimeo.com/" + window.index_video_id);
    return Daniela.init(window.saturdays_settings);
  });

}).call(this);

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Daniela.View = (function(superClass) {
    extend(View, superClass);

    function View() {
      return View.__super__.constructor.apply(this, arguments);
    }

    View.prototype.events = {};

    View.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      this.events["click [data-scroll-to]"] = "scroll_to";
      this.events["click [data-hide-overlay]"] = "hide_overlay";
      return this.render();
    };

    View.prototype.render = function() {
      this.delegateEvents();
      return this;
    };

    View.prototype.scroll_to = function(e) {
      var scroll_to, scroll_to_id;
      scroll_to_id = "#" + e.currentTarget.getAttribute("data-scroll-to");
      scroll_to = $(scroll_to_id);
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
    };

    View.prototype.hide_overlay = function(e) {
      return $("#" + e.currentTarget.getAttribute("data-hide-overlay")).removeClass("overlay--show");
    };

    return View;

  })(Backbone.View);

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

    Header.prototype.request_frame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;

    Header.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      return Header.__super__.initialize.call(this);
    };

    Header.prototype.render = function() {
      this.header = this.$el;
      this.previous_offset = 0;
      $(window).scroll((function(_this) {
        return function(e) {
          return _this.request_frame(_this.toggle_header);
        };
      })(this));
      return Header.__super__.render.call(this);
    };

    Header.prototype.toggle_header = function() {
      if (window.pageYOffset > this.previous_offset) {
        if (!this.header.hasClass("header--hide")) {
          this.header.addClass("header--hide");
        }
      } else {
        if (this.header.hasClass("header--hide")) {
          this.header.removeClass("header--hide");
        }
      }
      return this.previous_offset = window.pageYOffset;
    };

    return Header;

  })(Daniela.View);

}).call(this);

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Daniela.Views.SocialLinks = (function(superClass) {
    extend(SocialLinks, superClass);

    function SocialLinks() {
      return SocialLinks.__super__.constructor.apply(this, arguments);
    }

    SocialLinks.prototype.links_template = templates["social_links"];

    SocialLinks.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      return SocialLinks.__super__.initialize.call(this);
    };

    SocialLinks.prototype.render = function() {
      this.$el.html(this.links_template({
        links: window.social_links
      }));
      return SocialLinks.__super__.render.call(this);
    };

    return SocialLinks;

  })(Daniela.View);

}).call(this);

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Daniela.Views.Track = (function(superClass) {
    extend(Track, superClass);

    function Track() {
      return Track.__super__.constructor.apply(this, arguments);
    }

    Track.prototype.events = {
      "click [data-show-fullscreen]": "show_fullscreen",
      "click .js-hide_fullscreen": "hide_fullscreen"
    };

    Track.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      return Track.__super__.initialize.call(this);
    };

    Track.prototype.render = function() {
      var video;
      video = this.$el.find("[data-video-src]")[0];
      if ($(video).attr("data-video-src") != null) {
        this.setup_video(video, $(video).attr("data-video-src").split("//vimeo.com/")[1], video.id);
      }
      return Track.__super__.render.call(this);
    };

    Track.prototype.show_fullscreen = function(e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      this.$el.find(".js-fullscreen").addClass("overlay--show");
      return this.$el.find(".js-fullscreen_iframe").attr("src", e.currentTarget.getAttribute("data-show-fullscreen") + "?autoplay=1&color=white");
    };

    Track.prototype.hide_fullscreen = function(e) {
      this.$el.find(".js-fullscreen").removeClass("overlay--show");
      return setTimeout((function(_this) {
        return function() {
          return _this.$el.find(".js-fullscreen_iframe").attr("src", "");
        };
      })(this), 666);
    };

    Track.prototype.setup_video = function(frame, video_id, player_id) {
      var player;
      $(frame).attr("src", "https://player.vimeo.com/video/" + video_id + "?api=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&autopause=0&background=1&player_id=" + player_id);
      player = $f(frame);
      return player.addEvent("ready", function() {
        return player.addEvent("play", function() {
          return $(frame).removeClass("fade_out");
        });
      });
    };

    return Track;

  })(Daniela.View);

}).call(this);

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Daniela.Routers.Router = (function(superClass) {
    extend(Router, superClass);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.routes = {};

    Router.prototype.initialize = function() {};

    return Router;

  })(Backbone.Router);

}).call(this);

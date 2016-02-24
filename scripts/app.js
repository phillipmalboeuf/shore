(function() {
  $(function() {
    console.log("I like this digital age.");
    return $("[data-scroll-to]").click(function(e) {
      var scroll_to;
      scroll_to = $("#" + e.currentTarget.getAttribute("data-scroll-to"));
      if (scroll_to.length > 0 && !scroll_to.hasClass("biography")) {
        e.preventDefault();
        return scroll_to.velocity("scroll", {
          duration: 2000,
          easing: "easeOutQuart"
        });
      }
    });
  });

}).call(this);

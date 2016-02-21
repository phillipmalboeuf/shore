(function() {
  $(function() {
    console.log("I like this digital age.");
    return $("[data-scroll-to]").click(function(e) {
      e.preventDefault();
      console.log(e.currentTarget.getAttribute("data-scroll-to"));
      return console.log($("#" + e.currentTarget.getAttribute("data-scroll-to")));
    });
  });

}).call(this);

(function() {
  $(function() {
    console.log("I like this digital age.");
    return $(".js-scroll_to").click(function(e) {
      e.preventDefault();
      return console.log($("[data-collection-id='" + e.currentTarget.getAttribute("data-id") + "']"));
    });
  });

}).call(this);

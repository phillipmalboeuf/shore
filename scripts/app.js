(function() {
  $(function() {
    console.log("I like this digital age.");
    return $(".js-scroll_to").click(function(e) {
      e.preventDefault();
      return console.log(e.currentTarget);
    });
  });

}).call(this);

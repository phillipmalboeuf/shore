(function() {
  $(function() {
    console.log("I like this digital age.");
    return $(".js-scroll_to").click(function(e) {
      e.preventDefault();
      console.log(e.currentTarget.href);
      return console.log($("#" + e.currentTarget.href));
    });
  });

}).call(this);

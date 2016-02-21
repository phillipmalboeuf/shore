(function() {
  $(function() {
    console.log("I like this digital age.");
    return $(document).click("js-scroll_to", function(e) {
      e.preventDefault();
      return console.log(e.currentTarget);
    });
  });

}).call(this);

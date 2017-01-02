$(".dropdown-header").click(function(event) {
  $(this).closest(".dropdown").toggleClass("dropdown-open");
  $(this).find(".dropdown-selector").toggleClass("selected");
});

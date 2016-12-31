$(".dropdown-header").click(function(event) {
  $(this).closest(".dropdown").find(".dropdown-content").toggleClass("dropdown-open");
  $(this).find(".dropdown-selector").toggleClass("selected");
});
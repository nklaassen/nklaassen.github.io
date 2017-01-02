$(".dropdown-header").click(function(event) {
	$(this).closest(".dropdown").find(".dropdown-content").slideToggle();
  $(this).find(".dropdown-selector").toggleClass("selected");
});

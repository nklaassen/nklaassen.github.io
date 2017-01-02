var scrolled = false;
var lastPos = 0;
var topbarHeight = $("#top-bar").outerHeight();
var delta = 10;
$(window).scroll(function() {
	scrolled = true;
});
setInterval(function() {
	if(scrolled)
		didScroll();
}, 100);
function didScroll() {
	var pos = $(this).scrollTop();
	if(pos > lastPos + delta && pos > topbarHeight + delta) {
		$("#top-bar").addClass("hidden");
		lastPos = pos;
	}
	else if(pos < lastPos - delta) {
		$("#top-bar").removeClass("hidden");
		lastPos = pos;
	}
	scrolled = false;
}

$(".dropdown-header").click(function(event) {
	$(this).closest(".dropdown").find(".dropdown-content").slideToggle();
  $(this).find(".dropdown-selector").toggleClass("selected");
});

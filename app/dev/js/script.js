$(document).ready(function() {
	// Cnange button angle on button plus
	$detailToggle = function() {
		$(".details-button i").toggleClass("fa-angle-down fa-plus");
	};
	$(".details-button").css("poinnter-events", "none");
	//	Close of Facebook Analysis
	$(".analys-close").click(function(e) {
		e.preventDefault();
		$(".analys-close").hide(100);
		$(".analysis-data").slideUp();
		$(".analysis-data").find("input").value = "";
		$(".details-button").addClass("inactiveDetail");
		$(".details-button").css("pointer-events", "auto");
		$detailToggle();
	});
	// Open of Facebook Analysis
	$(".details-button").click(function(e) {
		e.preventDefault();
		if ($(this).hasClass("inactiveDetail") == true) {
			$(".analysis-data").slideDown();
			$(".details-button").removeClass("inactiveDetail");
			$detailToggle();
			$(".details-button").prop("pointer-events", "none");
			$(".analys-close").show(1000, ["easeOutQuart"]);
		}
	});
	//	Landing
	$(".navbar-about, .navbar-approach, .navbar-works").click(function (e) {
		e.preventDefault();
		var dest = 0;
		dest = $(this.hash).offset().top;
		$('html,body').animate({
			scrollTop: dest
		}, 500, 'swing');
	});
});
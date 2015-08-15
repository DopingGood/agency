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
	$scroll = function (lg, md, sm, xs) {
		var windowWidth = $(window).width();
		if (windowWidth > 1182) {
			window.scrollTo(0, lg);
		}
		else if (windowWidth > 974) {
			window.scrollTo(0, md);
		}
		else if (windowWidth > 750) {
			window.scrollTo(0, sm);
		}
		else {
			window.scrollTo(0, xs);
		}
	};

	$(".navbar-home").click(function(e) {
		e.preventDefault();
		$scroll(0, 0, 0, 0);
	});

	$(".navbar-about").click(function(e) {
		e.preventDefault();
		$scroll(800, 900, 900, 900);
	});

	$(".navbar-approach").click(function(e) {
		e.preventDefault();
		$scroll(1450, 1500, 1800, 2000);
	});

	$(".navbar-works").click(function(e) {
		e.preventDefault();
		$scroll(3030, 3100, 3400, 4600);
	});
});
/* JAVASCRIPT */

var nav = document.getElementById("SubNavigation");

/* function ShowMenu() {
	
	if(nav.style.display == "none")
		nav.style.display = "flex";
	else 
		nav.style.display = "none";
} */

window.onresize = function() {

	if(window.innerWidth > 600)
    	nav.style.display = "block";
};

/* JQUERY */

$(document).ready(function() {
	$(".ShowButton").click(function() {
		$("#SubNavigation").slideToggle("slow");
	});
});

/* JQUERY AJAX */

$(".image").click(function() {
   $("#PlaceHolder").load("../files/" + this.alt + ".txt");
   //$("#PlaceHolder").html(this.alt);
   $("html, body").animate({ scrollTop: 0 }, "slow");
});




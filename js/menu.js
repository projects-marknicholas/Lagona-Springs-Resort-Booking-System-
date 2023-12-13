function menu() {
	var menu = document.getElementById('phone-menu');

	if (menu.className == "phone-menu") {
		menu.className = "phone-menu-no";
	}
	else{
		menu.className = "phone-menu";
	}
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    	document.getElementById("nav").className = "nav-scroll";
    	document.getElementById("top").display = "none";
  	} 
  	else {
    	document.getElementById("nav").className = "nav";
    	document.getElementById("top").display = "flex";
  	}
}
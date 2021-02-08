jQuery(document).ready(function($){
	"use strict";
	const counters = document.querySelectorAll('.counter');
	const speed = 200; // The lower the slower

	counters.forEach(counter => {
		const updateCount = () => {
		const target = +counter.getAttribute('data-target');
	const count = +counter.innerText;

// Lower inc to slow and higher to slow
	const inc = target / speed;

// console.log(inc);
// console.log(count);

// Check if target is reached
	if (count < target) {
		// Add inc to count and output in counter
		counter.innerText = count + inc;
		// Call function every ms
		setTimeout(updateCount, 1);
	} else {
		counter.innerText = target;
	}
};

	updateCount();
});












	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			/* Toggle between adding and removing the "active" class,
			 to highlight the button that controls the panel */
			this.classList.toggle("active");

			/* Toggle between hiding and showing the active panel */
			var panel = this.nextElementSibling;
			if (panel.style.display === "block") {
				panel.style.display = "none";
			} else {
				panel.style.display = "block";
			}
		});
	}
	


	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	}



});




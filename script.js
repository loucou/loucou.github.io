(function () {
	"use strict";

	document.addEventListener("DOMContentLoaded", function () {
		document.querySelectorAll(".flip-card").forEach(function (card) {
			card.addEventListener("click", flipCard(card), false);
			card.addEventListener("mouseenter", flipCard(card), false);
			card.addEventListener("mouseleave", flipCard(card), false);
		});
	});

	function flipCard(card) {
		var inner = card.querySelector(".flip-card-inner");
		return function (event) {
			var cl = inner.classList;

			if (event.type === "click") {
				if (cl.contains("is-clicked")) {
					cl.remove("is-clicked");
					cl.remove("is-flipped");
				} else {
					cl.add("is-clicked");
					cl.add("is-flipped");
				}
			} else if (event.type === "mouseenter") {
				cl.add("is-flipped");
			} else if (event.type === "mouseleave") {
				if (!cl.contains("is-clicked")) {
					cl.remove("is-flipped");
				}
			}
		};
	}

	function log(str) {
		var output = document.getElementById("output");
		if (output) {
			output.innerHTML = output.innerHTML + "\n" + str;
		}
	}
})();

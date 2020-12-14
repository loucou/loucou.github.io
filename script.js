(function () {
	"use strict";

	document.addEventListener("DOMContentLoaded", function () {
		document.querySelectorAll(".flip-card").forEach(function (card) {
			card.addEventListener("click", flipCard(card), false);
		});
	});

	function flipCard(card) {
		var inner = card.querySelector(".flip-card-inner");
		return function (event) {
			var cur = inner.style.transform;
			inner.style.transform = cur != "rotateY(180deg)" ? "rotateY(180deg)" : "";
		};
	}

	function log(str) {
		var output = document.getElementById("output");
		if (output) {
			output.innerHTML = output.innerHTML + "\n" + str;
		}
	}
})();

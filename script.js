(function () {
	"use strict";

	document.addEventListener("DOMContentLoaded", function () {
		document.querySelectorAll(".flip-card").forEach(function (card) {
			// in order to be usable on phones:
			card.addEventListener("click", flipCard(card), false);

			// For PCs, handle with :hover in css
			// card.addEventListener("mouseenter", flipCard(card), false);
			// card.addEventListener("mouseleave", flipCard(card), false);
		});
	});

	function flipCard(card) {
		var inner = card.querySelector(".flip-card-inner");
		return function (event) {
			var currentTransform = inner.style.transform;
			inner.style.transform = currentTransform == "" ? "rotateY(180deg)" : "";
		};
	}
})();

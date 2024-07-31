document.addEventListener("DOMContentLoaded", function () {
	const button = document.querySelector(".button-link");
	const textDiv = document.querySelector(".button-text");

	button.addEventListener("click", function () {
		if (textDiv.style.display === "none" || textDiv.style.display === "") {
			textDiv.style.display = "block";
			button.style.display = "none"
		} else {
			textDiv.style.display = "none";
		}
	});
});

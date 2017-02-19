var angle = 0;
function galleryspin(sign) {
	var spinner = $("#container");
	if (sign) {
		angle += 60;
	} else {
		angle -= 60;
	}
	spinner.setAttribute("style", "transform: rotateY(" + angle + "deg);");
}
const hasHoudiniSupport = CSS.supports("background-image", "paint(worklet)");
if (!hasHoudiniSupport) {
	document.querySelector('.prop').innerText = `Sorry, your browser doesn't support animating custom properties!`;
}
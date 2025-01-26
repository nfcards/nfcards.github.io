let chosenColor = "black";
const baseUrl = "https://form.jotform.com/243241951326150";
let chosenUrl = "";

function setCardColor(event, primary, secondary) {
	if (!event.classList.contains("selected")) {
		let cardBkg = document.querySelector("#card_bkg");
		let logoColor = document.querySelector("#logo_color");

		logoColor.style.fill = secondary;
		cardBkg.style.fill = primary;
		
		document.querySelector("button.selected").classList.remove("selected");
		event.classList.add("selected"); 
		chosenColor = event.name;
	}
}
function orderCard () { 
	let fullUrl = baseUrl + "?whatColor=" + chosenColor + "&linkedWebsite=" + encodeURIComponent(chosenUrl);
	return chosenUrl && (window.location.href = fullUrl) ;
}
function activateOrder () {
	document.querySelector("#orderBtn").classList.remove("dull");
	document.querySelector("#orderBtn").classList.add("illuminated");
}
function deactivateOrder () {
	document.querySelector("#orderBtn").classList.remove("illuminated");
	document.querySelector("#orderBtn").classList.add("dull");
}
function isUrl(url) {
	return (url.length > 5) ? true : false 
}
function handleUrl(url) {
	if (isUrl(url)) {
		activateOrder();
		chosenUrl = url;
	}
	else {
		deactivateOrder();
	}
}


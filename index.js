console.log(isValidToken);
if(isValidToken) {
		// Valid card ID will disable scroll on device
		document.querySelector("body").style.overflow = "hidden";

	} else {
		// invalid card token will hide the loading screen

		document.querySelector("#loading").style.display = "none";
	}
function setCardColor(event, primary, secondary) {
	if (!event.classList.contains("selected")) {
		let cardBkg = document.querySelector("#card_bkg");
		let logoColor = document.querySelector("#logo_color");

		logoColor.style.fill = secondary;
		cardBkg.style.fill = primary;
		
		document.querySelector("button.selected").classList.remove("selected");
		event.classList.add("selected"); 
	}
}




	
	

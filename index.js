
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

//Retrieve the token parameter
function grabToken() {
	const urlSearch = window.location.search;
	const urlParams = new URLSearchParams(urlSearch);
	const token  = urlParams.get('token');
	return token ? token : false;
}

//Data from file
function handleRoutes(routes) {
	return routes.hasOwnProperty(grabToken()) && routes[grabToken()]['site'] && window.location.replace(routes[grabToken()]['site'])
	
}
window.addEventListener("load", () => {
	fetch("assets/routes.json")
		.then((res) => {
			if (!res.ok) {
				throw new Error
					(`HTTP error! Status: ${res.status}`);
			}
			return res.json();
		})
		.then(data => handleRoutes(data))
		.catch((error) =>
			console.error("Unable to fetch data:", error));
	
});


	
	

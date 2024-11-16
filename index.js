let routes = {};

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

/// Retrieve URL of token if Valid
function fetchRoutes() {
	
	

		return routes;
}
// Is the token a valid token in the reroute object
function isToken(token) {
	return routes.hasOwnProperty(token) && routes[token]['site'] ? true : false;
}
//Retrieve the token parameter
function grabToken() {
	const urlSearch = window.location.search;
	const urlParams = new URLSearchParams(urlSearch);
	const token  = urlParams.get('token');
	return token ? token : false;
}

// return "site" property value if token is found in routes
function grabUrl(token) {
	return isToken(token) ? routes[token]["site"] : false;
}
//console.log(grabUrl(token));
//	console.log(isToken(token));
//	;

//Data from file
function handleRoutes(routes) {
	(routes.hasOwnProperty(grabToken()) && routes[grabToken()]['site'] && window.location.replace(grabToken()))
	console.log(routes);
}
window.addEventListener("load", () => {
	alert("Window Ready");
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


	
	

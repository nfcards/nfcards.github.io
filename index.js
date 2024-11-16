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
	
	fetch("assets/routes.json")
		.then((res) => {
			if (!res.ok) {
				throw new Error
					(`HTTP error! Status: ${res.status}`);
			}
			return res.json();
		})
		.then(data => {
		  routes = data;
		})
		.catch((error) =>
			console.error("Unable to fetch data:", error));

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

Window.addEventListener("load", () => {
	alert("Window Ready");
	fetchRoutes();
	let token = grabToken();

	
	
	console.log(grabUrl(token));
	console.log(isToken(token));
	(isToken(token) && window.location.replace(grabUrl(token)));
});

	
	

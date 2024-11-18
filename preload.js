//Retrieve the token parameter
function grabToken() {
	const urlSearch = window.location.search;
	const urlParams = new URLSearchParams(urlSearch);
	const token  = urlParams.get('token');
	return token ? token : false;
}

//Handle routing based on token parameter
function handleRoutes(routes) {
	return routes.hasOwnProperty(grabToken()) && routes[grabToken()]['site'] && window.location.replace(routes[grabToken()]['site'])
	
}


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

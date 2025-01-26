let isValidToken = false; 
let token = '';
let triggerDetails = false;
//Retrieve the  value of the token parameter
function grabToken() {
	const urlSearch = window.location.search;
	const urlParams = new URLSearchParams(urlSearch);
	const token  = urlParams.get('token');
	return token ? token : '';
}
function isValidHttpUrl(input) {
	let url;
	
	try {
	  url = new URL(input);
	} catch (_) {
	  return false;  
	}
  
	return url.protocol === "http:" || url.protocol === "https:";
  }

//Handle routing from routes.json 
function handleRoutes(routes) {
	isValidToken = routes[grabToken()]; 
	// If token exists w/ a valid URL attached in routes.json, redirect to that URL
	if(isValidToken && routes[grabToken()]['site'] && isValidHttpUrl(routes[grabToken()]['site'])) {
		window.location.replace(routes[grabToken()]['site']); 
	} else if (isValidToken && !isValidHttpUrl(routes[grabToken()]['site'])){
		triggerDetails = true;
		token = grabToken();
		const script = document.createElement('script');
		script.src = 'showDetails.js';
		script.async = false; // Ensure script executes in order
		document.head.appendChild(script);
	} else {
		window.location.replace('mainpage.html');
	}
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
 


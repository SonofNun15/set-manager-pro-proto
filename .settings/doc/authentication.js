{
	// Create a callback to handle the result of the authentication
	function authHandler(error, authData) {
		if (error) {
			console.log("Login Failed!", error);
		} 
		else {
			console.log("Authenticated successfully with payload:", authData);
		}
	}
	
	// Authenticate users with a custom authentication token
	ref.authWithCustomToken("<token>", authHandler);
	
	// Alternatively, authenticate users anonymously
	ref.authAnonymously(authHandler);
	
	// Or with an email/password combination
	ref.authWithPassword({
		email    : 'bobtony@firebase.com',
		password : 'correcthorsebatterystaple'
	}, authHandler);
	
	// Or via popular OAuth providers ("facebook", "github", "google", or "twitter")
	ref.authWithOAuthPopup("<provider>", authHandler);
	ref.authWithOAuthRedirect("<provider>", authHandler);
	
	
	var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");


	// prefer pop-ups, so we don't navigate away from the page
	ref.authWithOAuthPopup("google", function(error, authData) {
		if (error) {
			if (error.code === "TRANSPORT_UNAVAILABLE") {
				// fall-back to browser redirects, and pick up the session
				// automatically when we come back to the origin page
				ref.authWithOAuthRedirect("google", function(error) { /* ... */ });
			}
		} 
		else if (authData) {
			// user authenticated with Firebase
		}
	});
	
	// logout
	ref.unauth();
}
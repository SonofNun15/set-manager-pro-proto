{
	// get the user structure from the user name

	var users = new Firebase("https://flickering-torch-2606.firebaseio.com/Users/" + userName);
	users.once('value', function(user) {
		currentUser = user.val();
	});
}
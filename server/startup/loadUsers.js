function loadUser(user) {
	if (Meteor.users.findOne({ username : user.username }))
		return;

	Accounts.createUser(user);
}

Meteor.startup(function() {
	USERS.forEach(loadUser);
});

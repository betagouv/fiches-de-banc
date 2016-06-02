function loadUser(user) {
	if (Meteor.users.findOne({ username : user.username })) {
		return console.error('Asked to load user with username "' + user.username + '" but one already exists in database; letting the previous one in place, ignoring update');
	}

	Accounts.createUser(user);
}

Meteor.startup(function() {
	USERS.forEach(loadUser);
});

Meteor.publish('Users.names', function () {
	return Meteor.users.find({}, { fields: { username: 1, _id: 1 } });
});

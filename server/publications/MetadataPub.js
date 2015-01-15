Meteor.publish('Metadata', function () {
	return Metadata.find();
});

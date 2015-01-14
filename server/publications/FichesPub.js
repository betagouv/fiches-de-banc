Meteor.publish('Fiches', function () {
	return Fiches.find();
});

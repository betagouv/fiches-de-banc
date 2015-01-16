Meteor.publish('AmendementsByPosition', function () {
	return Amendements.find({}, { sort: { 'content.position': 1 } });
});

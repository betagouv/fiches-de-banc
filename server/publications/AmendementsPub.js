Meteor.publish('AmendementsByPosition', function () {
	return Amendements.find({}, { sort: { 'amendement.position': 1 } });
});

Meteor.publish('AmendementsByPosition', function () {
	if (! this.userId)
		return [];

	return Amendements.find({}, { sort: { 'content.position': 1 } });
});

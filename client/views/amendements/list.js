Template.amendementsList.helpers({
	mineCount: function() {
		return Amendements.find({ managerId: Meteor.userId() }).count();
	}
});

Template.amendementsFilter.helpers({
	mineCount: function() {
		return Amendements.find({ managerId: Meteor.userId() }).count();
	}
});

Template.amendementsFilter.events({
	'keyup [name="article"]': _.throttle(function(event, template) {
		Router.go('search', {}, { query: 'q=' + event.target.value });
	}, 400)
});

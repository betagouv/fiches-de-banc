Template.amendementsFilter.helpers({
	mineCount: function() {
		return Amendements.find({ managerId: Meteor.userId() }).count();
	}
});

Template.amendementsFilter.events({
	'keyup [name="article"]': _.debounce(function(event, template) {
		Router.go('search', {}, { query: 'q=' + event.target.value });
	}, 300)
});

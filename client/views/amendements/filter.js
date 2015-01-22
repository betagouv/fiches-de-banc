Template.amendementsFilter.helpers({
	mineCount: function() {
		return Amendements.find({
			managerId		: Meteor.userId(),
			talkingPoint	: { $exists: false }
		}).count();
	},
	resultsCount: function() {
		return Amendements.find(_.extend(
			{ talkingPoint	: { $exists: false } },
			Session.get('amendementsQuery')
		)).count();
	}
});

Template.amendementsFilter.events({
	'keyup [name="article"]': _.debounce(function(event, template) {
		Router.go('search', {}, { query: 'q=' + event.target.value });
	}, 300),
	'click .print.active': function() {
		window.print();
	}
});

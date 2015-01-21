Template.amendementsFilter.helpers({
	mineCount: function() {
		return Amendements.find({ managerId: Meteor.userId() }).count();
	}
});

Template.amendementsFilter.events({
	'keyup [name="article"]': _.throttle(function(event, template) {
		var input = event.target.value,
			inputAsNumber = Number(input),
			query;

		if (inputAsNumber) {
			query = { 'content.place.article': inputAsNumber };
		} else if (input.length < 2) {
			query = { 'unmatchable': true };
		} else {
			query = {
				'content.place.raw': { $regex: '^' + input, $options: 'i' }
				// 'content.place.raw': { $text: input, $language: TAPi18n.getLanguage() }	// when MiniMongo will implement $text
			}
		}

		Session.set('amendementsQuery', query);
	}, 300)
});

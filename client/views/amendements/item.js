Template.amendementsItem.helpers({
	iconName: function(position) {
		return {
			'undefined'	: 'unknown',
			'positive'	: 'checkmark',
			'negative'	: 'x'
		}[position];
	}
});

Template.amendementsItem.events({
	'click .position': function(event, template) {
		var positions = Amendements.simpleSchema()._schema.position.allowedValues,
			currentPosition = template.data.position;
			currentPositionIndex = positions.indexOf(currentPosition);

		var newPosition = positions[(currentPositionIndex + 1) % positions.length];

		Amendements.update(template.data._id, { $set: { position: newPosition } });
	},

	'keyup textarea': _.debounce(function(event, template) {
		Amendements.update(template.data._id, { $set: { talkingPoint: event.target.value } });
	}, 300)
});

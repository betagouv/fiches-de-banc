Template.amendementsItem.helpers({
	iconName: function(position) {
		return {
			accepted: 'checkmark',
			rejected: 'remove'
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
		Amendements.update(template.data._id, { $set: { content: event.target.value } });
	}, 500)
});

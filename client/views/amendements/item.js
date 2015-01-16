Template.amendementsItem.helpers({
	iconName: function(position) {
		return {
			'undefined'	: 'unknown',
			'for'		: 'checkmark',
			'against'	: 'x'
		}[position];
	},

	index: function() {
		return Number(Template.instance().data.content.position.split('/')[0]);
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

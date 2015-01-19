Meteor.subscribe('Users.names');

Template.amendementsItem.helpers({
	manager: function() {
		return Users.findOne(Template.instance().data.managerId);
	},
	users: function() {
		return Meteor.users.find();
	},
	iconName: function(position) {
		return {
			'undefined'	: 'unknown',
			'positive'	: 'checkmark',
			'negative'	: 'x'
		}[position];
	},
	userOptionAttributes: function(currentUserId) {
		var result = {
			value: currentUserId
		};

		if (currentUserId == Template.instance().data.managerId)
			result.selected = true;

		return result;
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

	'change [name="manager"]': function(event, template) {
		var manager = Meteor.users.findOne(event.target.value);

		Amendements.update(template.data._id,
			(manager
			? { $set:	{ managerId: manager.id	} }
			: { $unset:	{ managerId: ''			} }
			)
		);
	},

	'keyup textarea': _.debounce(function(event, template) {
		Amendements.update(template.data._id, { $set: { talkingPoint: event.target.value } });
	}, 300)
});

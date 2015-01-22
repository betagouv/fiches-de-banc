Meteor.subscribe('Users.names');


Template.amendementsItem.rendered = function() {
	this.$('select.dropdown').dropdown();
}


Template.amendementsItem.helpers({
	manager: function() {
		return Users.findOne(Template.instance().data.managerId);
	},
	users: function() {
		return Meteor.users.find({}, { sort: { username: 1 } });
	},
	userOptionAttributes: function(currentUserId) {
		var result = {
			value: currentUserId
		};

		if (currentUserId == Template.instance().data.managerId)
			result.selected = true;

		return result;
	},
	isEditing: function() {
		return Session.get('edited') == Template.instance().data._id;
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
		Amendements.update(template.data._id, { $set: { managerId: event.target.value } });
	},

	'click .summary, click .talkingPoint': function(event, template) {
		Session.set('edited', template.data._id);
		Meteor.setTimeout(function() {
			template.$('textarea[name="summary"]').val(template.data.summary);
			template.$('textarea[name="talkingPoint"]').val(template.data.talkingPoint);
		}, 200);
	},

	'keyup textarea': _.throttle(function(event, template) {
		var setter = {};
		setter[event.target.name] = event.target.value;

		Amendements.update(template.data._id, { $set: setter });
	}, 800)
});

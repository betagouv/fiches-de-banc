Template.fichesItem.helpers({
	iconName: function(status) {
		return {
			accepted: 'checkmark',
			rejected: 'remove'
		}[status];
	}
});

Template.fichesItem.events({
	'click .status': function(event, template) {
		var statuses = Fiches.simpleSchema()._schema.status.allowedValues,
			currentStatus = template.data.status;
			currentStatusIndex = statuses.indexOf(currentStatus);

		var newStatus = statuses[(currentStatusIndex + 1) % statuses.length];

		Fiches.update(template.data._id, { $set: { status: newStatus } });
	},

	'keyup textarea': _.debounce(function(event, template) {
		Fiches.update(template.data._id, { $set: { content: event.target.value } });
	}, 500)
});

Template.fichesItem.helpers({
	iconName: function(status) {
		return {
			accepted: 'checkmark',
			rejected: 'remove'
		}[status];
	}
});

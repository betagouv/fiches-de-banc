Meteor.subscribe('Metadata');

Template.footer.helpers({
	metadata: function() {
		return Metadata.findOne();
	}
});

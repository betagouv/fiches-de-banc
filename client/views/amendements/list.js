Meteor.subscribe('AmendementsByPosition');

Template.amendementsList.helpers({
	amendements: function() {
		return Amendements.find();
	}
});

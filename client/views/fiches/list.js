Meteor.subscribe('Fiches');

Template.fichesList.helpers({
	fiches: function() {
		return Fiches.find();
	}
});

Meteor.startup(function() {
	AssembleeNationale.update();

	Meteor.setInterval(AssembleeNationale.update, 1000 * 60 * 60 * 24);
});

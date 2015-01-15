Meteor.startup(function() {
	AssembleeNationale.update();

	Meteor.setInterval(AssembleeNationale.update, 60 * 1000);
});

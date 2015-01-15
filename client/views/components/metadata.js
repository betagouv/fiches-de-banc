Meteor.subscribe('Metadata');

Template.metadata.created = function() {
	this.timer = new Deps.Dependency();

	window.setInterval(this.timer.changed.bind(this.timer), 5000);	// ensure formattedDate helper reruns
}

Template.metadata.helpers({
	metadata: function() {
		return Metadata.findOne();
	},
	formattedDate: function() {
		var date = Metadata.findOne().date;
		Template.instance().timer.depend();
		return moment(date).fromNow();
	}
});

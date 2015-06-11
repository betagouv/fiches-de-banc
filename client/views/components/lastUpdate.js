Template.lastUpdate.onCreated(function() {
	this.timer = new Tracker.Dependency();

	window.setInterval(this.timer.changed.bind(this.timer), 5000);	// ensure formattedDate helper reruns
});

Template.lastUpdate.helpers({
	format: function(date) {
		Template.instance().timer.depend();
		return moment(date).fromNow();
	},
	stringify: function(json) {
		return JSON.stringify(json);
	}
});

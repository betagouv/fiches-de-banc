Template.lastUpdate.created = function() {
	this.timer = new Deps.Dependency();

	window.setInterval(this.timer.changed.bind(this.timer), 5000);	// ensure formattedDate helper reruns
}

Template.lastUpdate.helpers({
	format: function(date) {
		Template.instance().timer.depend();
		return moment(date).fromNow();
	}
});

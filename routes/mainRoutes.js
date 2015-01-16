// Home Route
Router.route('/', {
	name: 'amendementsList',
	data: function() { return Amendements.find() }
});

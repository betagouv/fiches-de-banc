Router.route('/', {
	name: 'amendementsList',
	data: function() { return Amendements.find() }
});

Router.route('/amendement/:_id', {
	name: 'amendementsFullpage',
	data: function() { return Amendements.findOne(this.params._id) }
});

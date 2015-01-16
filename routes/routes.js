Router.route('/', {
	name: 'amendementsList',
	data: function() { return Amendements.find() }
});

Router.route('/amendement/:_id', {
	layoutTemplate: null,
	name: 'amendementsFullpage',
	data: function() { return Amendements.findOne(this.params._id) }
});

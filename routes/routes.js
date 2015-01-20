Router.route('/', {
	name			: 'amendementsList',
	layoutTemplate	: 'editionLayout',
	waitOn			: function() { return Meteor.subscribe('AmendementsByPosition') },
	data			: function() { return Amendements.find() }
});

Router.route('/utilisateur/:_id', {
	name			: 'amendementsForUser',
	template		: 'amendementsList',
	layoutTemplate	: 'editionLayout',
	waitOn			: function() { return Meteor.subscribe('AmendementsByPosition') },
	data			: function() { return Amendements.find({ managerId: this.params._id }) }
});

Router.route('/amendement/:_id', {
	name			: 'amendementsFullpage',
	data			: function() {
		Meteor.subscribe('AmendementsByPosition');
		return Amendements.findOne(this.params._id);
	}
});

Router.route('/connexion', {
	name			: 'login'
});

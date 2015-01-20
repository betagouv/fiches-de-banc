Router.route('/', {
	name			: 'amendementsList',
	layoutTemplate	: 'editionLayout',
	waitOn			: function() { return Meteor.subscribe('AmendementsByPosition') },
	data			: function() {
		return {
			amendements	: Amendements.find(),
			currentTab	: 'all'
		}
	}
});

Router.route('/utilisateur/:_id', {
	name			: 'amendementsForUser',
	template		: 'amendementsList',
	layoutTemplate	: 'editionLayout',
	waitOn			: function() { return Meteor.subscribe('AmendementsByPosition') },
	data			: function() {
		return {
			amendements	: Amendements.find({ managerId: this.params._id }),
			currentTab	: 'mine'
		}
	}
});

Router.route('/amendement/:_id', {
	name			: 'amendementsFullpage',
	waitOn			: function() { return Meteor.subscribe('AmendementsByPosition') },
	data			: function() {
		return Amendements.findOne(this.params._id);
	}
});

Router.route('/connexion', {
	name			: 'login'
});

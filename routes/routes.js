Router.route('/', function() {
	this.redirect('amendementsForUser', {
		_id: Meteor.userId()
	});
});

Router.route('/amendements', {
	name			: 'amendementsList',
	layoutTemplate	: 'editionLayout',
	waitOn			: function() { return Meteor.subscribe('AmendementsByPosition') },
	data			: function() {
		return {
			currentTab	: 'all'
		}
	},
	onAfterAction	: function() {
		Session.set('amendementsQuery', {});
	}
});

Router.route('/utilisateur/:_id', {
	name			: 'amendementsForUser',
	template		: 'amendementsList',
	layoutTemplate	: 'editionLayout',
	waitOn			: function() { return Meteor.subscribe('AmendementsByPosition') },
	data			: function() {
		return {
			currentTab	: 'mine'
		}
	},
	onAfterAction	: function() {
		Session.set('amendementsQuery', { managerId: this.params._id });
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

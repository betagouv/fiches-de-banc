Router.route('/', function() {
	this.redirect('amendementsForUser', {
		_id: Meteor.userId()
	});
});

Router.route('/amendements', {
	name			: 'amendementsList',
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

Router.route('/recherche', {
	name			: 'search',
	template		: 'amendementsList',
	waitOn			: function() { return Meteor.subscribe('AmendementsByPosition') },
	data			: function() {
		return {
			currentTab	: 'search',
			query		: this.params.query.q
		}
	},
	onAfterAction: function() {
		var sought = this.params.query.q,
			soughtAsNumber = Number(sought),
			amendementsQuery;

		if (soughtAsNumber) {
			amendementsQuery = { 'content.place.article': soughtAsNumber };
		} else if (sought.length < 2) {
			amendementsQuery = { 'unmatchable': true };
		} else {
			amendementsQuery = {
				'content.place.raw': { $regex: '^' + sought, $options: 'i' }
				// 'content.place.raw': { $text: sought, $language: TAPi18n.getLanguage() }	// when MiniMongo will implement $text
			}
		}

		Session.set('amendementsQuery', amendementsQuery);
	}
});

Router.route('/amendement/:_id', {
	layoutTemplate	: null,
	name			: 'amendementsFullpage',
	waitOn			: function() { return Meteor.subscribe('AmendementsByPosition') },
	data			: function() {
		return Amendements.findOne(this.params._id);
	}
});

Router.route('/imprimer', {
	name			: 'amendementsPrintableList',
	waitOn			: function() { return Meteor.subscribe('AmendementsByPosition') },
	data			: function() {
		return {
			currentTab	: 'print'
		}
	}
});

Router.route('/connexion', {
	layoutTemplate	: null,
	name			: 'login'
});

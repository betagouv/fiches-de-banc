Router.configure({
	notFoundTemplate	: 'notFound',
	loadingTemplate		: 'loading',
	waitOn				: function() { return Meteor.subscribe('AmendementsByPosition') }
});

Router.onBeforeAction('dataNotFound');

Router.onBeforeAction(function() {
	 if (! Meteor.userId())
		return this.render('login');

	this.next();
});

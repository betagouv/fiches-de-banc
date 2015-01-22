Router.configure({
	layoutTemplate		: 'mainLayout',
	notFoundTemplate	: 'notFound',
	loadingTemplate		: 'loading'
});

Router.onBeforeAction('dataNotFound');

Router.onBeforeAction(function() {
	if (! Meteor.userId())
		this.redirect('login');

	this.next();
});

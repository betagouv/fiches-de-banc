Router.configure({
	layoutTemplate		: 'editionLayout',
	notFoundTemplate	: 'notFound',
	loadingTemplate		: 'loading',
	waitOn				: function() { return Meteor.subscribe('AmendementsByPosition') }
});

Router.onBeforeAction('dataNotFound');

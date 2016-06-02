USERS = typeof USERS !== 'undefined' ? USERS : [];

if (Meteor.settings.public.demo)
	USERS = USERS.concat(Meteor.settings.public.demo);

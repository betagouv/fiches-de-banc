Template.login.events({
	'submit': function(event, template) {
		Meteor.loginWithPassword(template.find('[name="email"]').value, template.find('[name="password"]').value, Router.go.bind(Router, template.find('form').action));
		event.preventDefault();
	}
});

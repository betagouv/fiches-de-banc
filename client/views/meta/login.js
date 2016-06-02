Template.login.created = Meteor.logout;


Template.login.events({
	'submit': function(event, template) {
		Meteor.loginWithPassword(
			template.find('[name="email"]').value,
			template.find('[name="password"]').value,
			function(error) {
				if (error)
					console.log(error);

				Router.go('amendementsForUser', {
					_id: Meteor.userId()
				});
			}
		);
		event.preventDefault();
	}
});

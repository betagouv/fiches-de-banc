Template.amendementsList.helpers({
	amendements: function() {
		return Amendements.find(Session.get('amendementsQuery'));
	}
})

Template.loading.helpers({
	loadedCount: function() {
		return Amendements.find().count();
	}
});

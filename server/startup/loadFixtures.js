function loadFixture(fixtures, collection) {
	for (var i = 0; i < fixtures.length; i++) {
		collection.insert(fixtures[i]);
	}
}

Meteor.startup(function() {
	for (var collectionName in Fixtures) {
		if (Fixtures.hasOwnProperty(collectionName)) {
			var collection = global[collectionName];

			if (! collection.find().count()) {
				loadFixture(Fixtures[collectionName], collection);
			}
		}
	}
});

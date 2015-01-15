function loadFixture(fixtures, collection) {
	for (var i = 0; i < fixtures.length; i++) {
		collection.insert(fixtures[i]);
	}
}

Meteor.startup(function() {
	Meteor.setTimeout(function() {
		for (var collectionName in Fixtures) {
			if (Fixtures.hasOwnProperty(collectionName)) {
				var collection = global[collectionName];

				if (! collection.find().count()) {
					loadFixture(Fixtures[collectionName], collection);
				}
			}
		}
	}, 5000);	// let time for collections to populate
});

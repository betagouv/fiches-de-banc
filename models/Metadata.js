Metadata = new Mongo.Collection('Metadata');

if (Meteor.isServer) {
	Metadata.deny({
		insert: yes,
		update: yes,
		remove: yes
	});
}

function yes() {
	return true;
}

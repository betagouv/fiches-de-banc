Metadata = new Mongo.Collection('Metadata');


function yes() {
	return true;
}

if (Meteor.isServer) {
	Metadata.deny({
		insert: yes,
		update: yes,
		remove: yes
	});
}

Metadata = new Mongo.Collection('Metadata');


if (Meteor.isServer) {
	Metadata.deny({
		insert : function () {
			return true;
		},
		update : function () {
			return true;
		},
		remove : function () {
			return true;
		}
	});
}

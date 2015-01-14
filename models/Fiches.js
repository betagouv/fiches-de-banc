Fiches = new Mongo.Collection('Fiches');

Fiches.attachSchema(
	new SimpleSchema({
		amendement: {
			type: String
		},
		content: {
			type: String
		},
		status: {
			type: String,
			allowedValues: [ 'accepted', 'rejected' ]
		}
	})
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
	Fiches.allow({
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

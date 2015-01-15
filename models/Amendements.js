Amendements = new Mongo.Collection('Amendements');

Amendements.attachSchema(
	new SimpleSchema({
		content: {
			type: Object,
			blackbox: true
		},
		talkingPoint: {
			type: String,
		},
		position: {
			type: String,
			allowedValues: [ 'for', 'against' ]
		}
	})
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
	Amendements.allow({
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

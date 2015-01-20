Amendements = new Mongo.Collection('Amendements');

Amendements.attachSchema(
	new SimpleSchema({
		content: {
			type: Object,
			blackbox: true
		},
		talkingPoint: {
			type: String,
			optional: true
		},
		position: {
			type: String,
			optional: true,
			allowedValues: [ 'positive', 'negative', 'none', 'remove', 'refine', 'ours' ]
		},
		managerId: {
			type: String,
			optional: true
		}
	})
);


function yes() {
	return true;
}

Amendements.deny({
	insert: yes,
	remove: yes
});

Amendements.allow({
	update: function(userId, doc, fieldNames, modifier) {
		return ! _.contains(fieldNames, 'amendement');
	}
});

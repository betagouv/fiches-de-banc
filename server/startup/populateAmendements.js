Meteor.startup(function() {
	AssembleeNationale.getAmendements('2447', 'CSCRACTIV', '14', function(error, amendements) {
		if (error)
			throw error;

		amendements.forEach(function(amendement) {
			Amendements.upsert(amendement.numero, {
				$set: {
					content: amendement
				}
			});
		});
	});
});

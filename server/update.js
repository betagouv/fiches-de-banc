AssembleeNationale.update = function() {
	console.log('Attempting to fetch amendements for text', Meteor.settings.public.textId, Meteor.settings.public.organismId, Meteor.settings.public.legislature);

	AssembleeNationale.getAmendements(Meteor.settings.public.textId, Meteor.settings.public.organismId, Meteor.settings.public.legislature, function(error, amendements) {
		var updatedCount = 0;

		if (error) {
			console.error(error);
		} else {
			amendements.forEach(function(amendement) {
				var upsertReport = Amendements.upsert(amendement.numero, {
					$set: {
						content: amendement
					}
				});

				updatedCount += upsertReport.numberAffected;
			});
		}

		Metadata.upsert('lastUpdateFromAssembleeNationale', {
			$set: {
				date: new Date,
				error: error,
				updatedCount: updatedCount
			}
		}, function(err) {
			if (err) console.error(err);
			else console.log('Updated', updatedCount, 'amendements')
		});
	});
}

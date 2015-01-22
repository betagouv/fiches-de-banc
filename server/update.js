AssembleeNationale.update = function() {
	AssembleeNationale.getAmendements('2498', 'AN', '14', function(error, amendements) {
		var updatedCount = 0;

		if (! error) {
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
		});
	});
}

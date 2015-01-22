function fichesDone() {
	return Amendements.find({ talkingPoint: { $exists: true } }).count();
}

function fichesCount() {
	return Amendements.find().count();
}


Template.progressBar.rendered = function() {
	Tracker.autorun(function() {
		var doneRatio = fichesDone() / fichesCount();

		$('.progress').progress({
			percent: Math.round(doneRatio * 100)
		});
	});
}

Template.progressBar.helpers({
	done: function() {
		return fichesDone();
	},
	total: function() {
		return fichesCount();
	}
})

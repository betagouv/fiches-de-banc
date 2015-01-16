function fichesLeft() {
	return Amendements.find({ talkingPoint: { $exists: false } }).count();
}

function fichesCount() {
	return Amendements.find().count();
}

Template.header.helpers({
	still: function() {
		if (fichesLeft() == 0)
			return 'Ça y est ! ';
		if (fichesLeft() < 100)
			return 'Plus que';

		return 'Encore';
	},
	fichesCount: function () {
		var leftRatio = fichesLeft() / fichesCount();

		_.debounce(function() {
			$(Template.instance().find('.progress')).progress({
				percent: Math.round(100 - leftRatio * 100)
			});
		}, 500);

		return fichesCount();
	},
	fichesLeft: function () {
		return fichesLeft();
	}
});

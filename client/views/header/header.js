function fichesLeft() {
	return Amendements.find({ talkingPoint: { $exists: false } }).count();
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
		return Amendements.find().count();
	},
	fichesLeft: function () {
		return fichesLeft();
	}
});

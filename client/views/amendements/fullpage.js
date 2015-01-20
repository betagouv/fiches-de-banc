Template.amendementsFullpage.helpers({
	article: function() {
		return Template.instance().data.content.place.replace(/ ?Article ?/i, '')
	},
	next: function() {
		return Amendements.findOne({
			'content.position': Template.instance().data.content.position + 1
		});
	},
	previous: function() {
		return Amendements.findOne({
			'content.position': Template.instance().data.content.position - 1
		});
	},
	_: function(position) {
		return {
			'positive'	: 'Favorable',
			'negative'	: 'Défavorable',
			'none'		: 'Sagesse',
			'remove'	: 'Retrait',
			'refine'	: 'Sous-amendement',
			'ours'		: 'Amendement du gouvernement'
		}[position] || 'Indéfinie';
	}
});

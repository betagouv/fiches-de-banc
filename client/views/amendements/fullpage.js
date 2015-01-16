Template.amendementsFullpage.helpers({
	article: function() {
		return Template.instance().data.content.place.replace(/ ?Article ?/i, '')
	},
	_: function(position) {
		return {
			'positive': 'Favorable',
			'negative': 'Défavorable'
		}[position] || 'Indéfinie';
	}
});

Template.amendementsFullpage.helpers({
	article: function() {
		return Template.instance().data.content.place.replace(/ ?Article ?/i, '')
	},
	amendmentUrl: function() {
		return 'http://www.assemblee-nationale.fr/14/amendements/2498/AN/' + Template.instance().data._id + '.pdf';	// TODO: pull variables from config
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
	}
});

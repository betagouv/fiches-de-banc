Template.amendementsFullpage.helpers({
	article: function() {
		return Template.instance().data.content.place.replace(/ ?Article ?/i, '')
	},
	amendmentUrl: function() {
		return [
			'http://www.assemblee-nationale.fr',
			Meteor.settings.public.legislature,
			'amendements',
			Meteor.settings.public.textId,
			Meteor.settings.public.organismId,
			Template.instance().data._id + '.pdf'
		].join('/');
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

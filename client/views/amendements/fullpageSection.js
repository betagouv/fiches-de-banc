Template.fullpageSection.helpers({
	content: function() {
		return Template.parentData(1)[Template.instance().data.name];
	}
});

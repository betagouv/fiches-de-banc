Template.amendementsPrintableList.rendered = function() {
	$('html').attr('mozNoMarginBoxes', 'true');	// do not add URL and date to generated PDF when printing
}

Template.amendementsPrintableList.helpers({
	printableAmendements: function() {
		return Amendements.find(_.extend({ talkingPoint: { $exists: true } }, Session.get('amendementsQuery')));
	}
});

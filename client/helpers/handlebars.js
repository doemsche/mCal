UI.registerHelper('isAdmin', function() {
	return Roles.userIsInRole(Meteor.user(), ['admin']);
});

UI.registerHelper('moment', function(date) {
	var dayWrapper = moment(date)
	return dayWrapper.format('DD.MM.YYYY');
});


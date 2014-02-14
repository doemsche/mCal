Handlebars.registerHelper('isAdmin', function() {
	return Roles.userIsInRole(Meteor.user(), ['admin']);
});

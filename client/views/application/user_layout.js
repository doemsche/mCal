Template.userLayout.helpers({
	pageTitle: function(){
		return Session.get('pageTitle');
	},
	userImage: function(){
		var user = Meteor.user() || null
		if(Meteor.user() != null && Meteor.user().services){
			return  "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=square";
		} else {
			return ''
		}
	}
});



Template.userLayout.rendered = function(){
		var date = Session.get('gui-state-cal-date');


	$('#calendar').fullCalendar( 'gotoDate',
		date.getFullYear(),
		date.getMonth(),
		date.getDate()
	);
}


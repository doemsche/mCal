Template.userLayout.helpers({
	pageTitle: function(){
		return Session.get('pageTitle');
	},
	userImage: function(){
		var user = Meteor.user() || null
		if(Meteor.user() != null && Meteor.user() != undefined){
			if(Meteor.user().services != undefined){
				if(Meteor.user().services.facebook != undefined){
					return  "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=square";
				}			
			} else {
				return '';
			}
			
		} else {
			return ''
		}
	}
});



// Template.userLayout.rendered = function(){
// 		var date = Session.get('gui-state-cal-date');


// 	$('#calendar').fullCalendar( 'gotoDate',
// 		date.getFullYear(),
// 		date.getMonth(),
// 		date.getDate()
// 	);
// }


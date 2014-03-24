Template.userLayout.helpers({
	pageTitle: function(){
		return Session.get('pageTitle');
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


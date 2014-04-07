Template.calendarView.rendered = function(){
	console.log('calendarview rendered called');

	$('#calendar').fullCalendar({
		height:200,
		monthNames: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','Mai','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
		dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
		dayNamesShort: ['So','Mo','Di','Mi','Do','Fr','Sa'],
		mEvents: function(){
			var mEvents = MEvents.find().fetch(),
				arr = [];
			_.each(mEvents, function(obj,i,context){
				var fcObj ={
					id: obj._id,
					title: obj.title,
					start: obj.date,
					className: 'mEvent-calView',
					editable: false,
					backgroundColor: '#ff0000'
				};
				arr.push(fcObj);
			});
			return arr;
		}(),
		mEventClick:function(calEvent,jsEvent,view){
			// Session.set('editing_calevent',calEvent.id);
			// Session.set('showEditEvent',true);
			var mEventId = calEvent._id;
			Router.go('/mEvents/'+mEventId);
		}
	});
}

Template.calendarView.events({
	'click .fc-button-next': function(e){
		e.preventDefault();
		var date = Session.get('gui-state-cal-date');
		var newMonth = date.getMonth()+1;
		date.setMonth(newMonth);
		Session.set('gui-state-cal-date', date);
		// console.log(Session.get('gui-state-cal-date'));
	},
	'click .fc-button-prev': function(e){
		e.preventDefault();
		var date = Session.get('gui-state-cal-date');
		var newMonth = date.getMonth()-1;
		date.setMonth(newMonth);
		Session.set('gui-state-cal-date', date);
		// console.log(Session.get('gui-state-cal-date'));		
	}
});
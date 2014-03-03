Template.calendarView.rendered = function(){
	console.log('calendarview rendered called');
	$('#calendar').fullCalendar({
		height:200,
		monthNames: ['Janaur','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','Mai','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
		dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
		dayNamesShort: ['So','Mo','Di','Mi','Do','Fr','Sa'],
		events: function(){
			var events = Events.find().fetch(),
				arr = [];
			_.each(events, function(obj,i,context){
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
		eventClick:function(calEvent,jsEvent,view){
			// Session.set('editing_calevent',calEvent.id);
			// Session.set('showEditEvent',true);
			var eventId = calEvent._id;
			Router.go('/events/'+eventId);
		}
	});
}

// Template.calendarView.rendered = function ( ) {
// 	var menuBottom = document.getElementById( 'cal-menu' ),
// 			showBottom = document.getElementById( 'showBottom' );
		
// 	if(Session.get('gui-state-menu-bottom') == "visible" ){
// 		classie.toggle(menuBottom, 'cbp-spmenu-open' )
// 	}
	

// 	showBottom.onclick = function() {
// 		Session.set('gui-state-menu-bottom', 'visible');
		
// 		classie.toggle( menuBottom, 'cbp-spmenu-open' );
// 	};
// }
Template.mEventDetail.helpers({

	participations: function(){
		return Participations.find({mEventId: this._id});
	},
	participationsCount: function(){
		return Participations.find({mEventId: this._id, attend:true}).count();
	},
	next_mEvent: function(){
		//debugger;
		var currentDate = MEvents.findOne({_id: this._id}).date;
		var next_mEvent = MEvents.find( {date: {$gt:currentDate} }, {sort: {date: 1} } ).fetch()[0];
		console.log(next_mEvent);
		return next_mEvent;
	},
	prev_mEvent: function(){
		//debugger;
		var currentDate = MEvents.findOne({_id: this._id}).date;
		var prev_mEvent = MEvents.find( {date: {$lt:currentDate} }, {sort: {date: 1} } ).fetch()[0];
		console.log(prev_mEvent)
		return prev_mEvent;
	}

});

Template.mEventDetail.rendered = function(){
	var date = Session.get('gui-state-cal-date');
	//debugger;

	$('#calendar').fullCalendar( 'gotoDate',
		date.getFullYear(),
		date.getMonth(),
		date.getDate()
	);


	// var calEvent = Events.findOne(this.data._id).date;
	// Session.set('cal-date', calEvent._id);
	// if( !Session.get('gui-state-calViewShow') ){
	// 	$('#cal-menu').removeClass('cbp-spmenu-open');	
	// 	Session.set('gui-state-calViewShow', false);
	// 	//console.log("FALSE")

	// } else {
	// 	$('#cal-menu').addClass('cbp-spmenu-open');
	// 	Session.set('gui-state-calViewShow', true);
	// 	//console.log("TRUE")
	// }	
}


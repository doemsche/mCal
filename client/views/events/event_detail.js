Template.eventDetail.helpers({

	participations: function(){
		return Participations.find({eventId: this._id});
	},
	participationsCount: function(){
		return Participations.find({eventId: this._id, attend:true}).count();
	},
	nextEvent: function(){
		var currentDate = Events.findOne({_id: this._id}).date;
		var nextEvent = Events.find( {date: {$gt:currentDate} }, {sort: {date: 1} } ).fetch()[0];
		return nextEvent;
	},
	prevEvent: function(){
		var currentDate = Events.findOne({_id: this._id}).date;
		var prevEvent = Events.find( {date: {$lt:currentDate} }, {sort: {date: 1} } ).fetch()[0];
		return prevEvent;
	}

});

Template.eventDetail.rendered = function(){
	if( !Session.get('gui-state-calViewShow') ){
		$('#cal-menu').removeClass('cbp-spmenu-open');
		Session.set('gui-state-calViewShow', false);
		console.log("FALSE")

	} else {
		$('#cal-menu').addClass('cbp-spmenu-open');
		Session.set('gui-state-calViewShow', true);
		console.log("TRUE")
	}	
}


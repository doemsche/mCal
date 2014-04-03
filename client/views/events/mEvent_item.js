Template.mEventItem.helpers({
	owns_mEvent: function(){
		return this.userId == Meteor.userId()
	},
	participations: function(){
		return Participations.find({mEventId: this._id});
	},

});

Template.mEventItem.events({

	'click .btn': function(e){
		// console.log('event clicked session set');
		// e.preventDefault();
		// Session.set('eventToDisplayDetails', this._id);
		
	}
});
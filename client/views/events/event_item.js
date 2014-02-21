Template.eventItem.helpers({
	ownsEvent: function(){
		return this.userId == Meteor.userId()
	},
	// participations: function(){
	// 	return Participations.find({eventId: this._id});
	// },

});

Template.eventItem.events({

	// 'click .btn': function(e){
	// 	console.log('event clicked session set');
	// 	e.preventDefault();
	// 	Session.set('eventToDisplayDetails', this._id);
		
	// }
});
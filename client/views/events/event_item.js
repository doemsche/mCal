Template.eventItem.helpers({
	ownsEvent: function(){
		return this.userId == Meteor.userId()
	},
	// participations: function(){
	// 	return Participations.find({eventId: this._id});
	// },

});
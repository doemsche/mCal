Template.eventDetail.helpers({

	participations: function(){
		return Participations.find({eventId: this._id});
	},
	participationsCount: function(){
		return Participations.find({eventId: this._id}).count();
	}
});
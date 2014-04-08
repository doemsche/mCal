Template.admin_mEventDetail.helpers({

	participations: function(){
		return Participations.find({mEventId: this._id});
	}
});
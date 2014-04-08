Template.admin_mEventsList.helpers({
	mEvents: function(){
		return MEvents.find();
	}
});
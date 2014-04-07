
Template.mEventsList.helpers({
  mEvents: function(){
	return MEvents.find({}, {sort: {submitted: -1}});
  }
});
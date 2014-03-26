Template.adminEventsList.helpers({
	events: function(){
		return Events.find();
	}
});
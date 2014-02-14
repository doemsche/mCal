Template.eventItem.helpers({
	ownsEvent: function(){
		return this.userId == Meteor.userId()
	}
});
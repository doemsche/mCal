Notifications = new Meteor.Collection('notifications');


Notifications.allow({
	update: ownsDocument
});


createParticipationNotification = function(participation){
	//var microEvent = Event.find(participation.eventId);

	Notifications.insert({
		userId: participation.userId,
		mEventId: participation.mEventId,
		participationId :participation._id,
		read: false
	});
};
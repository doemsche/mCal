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

Meteor.methods({
	markAsRead: function(options){
		var notificationId = options.id;
		var notification = Notifications.findOne({ _id: notificationId} );
		if(!notification.read){
			Notifications.update(
				{
					_id: notificationId,
				},
				{
					$set:{ read: true }
				}
			)
		}	
	}
});
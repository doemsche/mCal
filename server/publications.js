Meteor.publish('events', function(){	
	return Events.find();	
});

Meteor.publish('participations', function(eventId){
	return Participations.find({eventId: eventId});
});

Meteor.publish('notifications', function() {
  return Notifications.find();
});
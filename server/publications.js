Meteor.publish('mEvents', function(){	
	return MEvents.find();	
});

Meteor.publish('participations', function(mEventId){
	return Participations.find({mEventId: mEventId});
});

Meteor.publish('notifications', function() {
  return Notifications.find();
});
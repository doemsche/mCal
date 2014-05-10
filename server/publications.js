Meteor.publish('mEvents', function(options){	
	return MEvents.find({}, options);	
});

Meteor.publish('participations', function(mEventId){
	return Participations.find({mEventId: mEventId});
});

Meteor.publish('notifications', function() {
  return Notifications.find();
});
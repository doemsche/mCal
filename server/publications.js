Meteor.publish('mEvents', function(options){	
	return MEvents.find({}, options);	
});

Meteor.publish('participations', function(mEventId){
	console.log(Participations.find({mEventId: mEventId}).count());
	return Participations.find({mEventId: mEventId});
});

Meteor.publish('notifications', function(options) {
  return Notifications.find({},options);
});
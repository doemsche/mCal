Meteor.publish('events', function(){	
	return Events.find();	
});

Meteor.publish('participations', function(participationId){
	return Participations.find({eventId: participationId});
});
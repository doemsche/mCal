if(Participations.find().count() === 0){
	var now = new Date().getTime();
	var microEventId = Events.findOne()._id

	var adminId = '9sZvgK3LZWy85yWNF';
	var user1Id = 'TkMiuDb97Avvkfayj';
	var user2Id = '2KGCyYcJNrFnB83dN';
	var user3Id = 'K8fCExFLZp3PtNu79';

	var user1 = Meteor.users.findOne(user1Id);
	var user2 = Meteor.users.findOne(user2Id);
	var user3 = Meteor.users.findOne(user3Id);

	Participations.insert({
	    eventId: microEventId,
	    userId: user1._id,
	    submitted: now - 3 * 3600 * 1000,
	  });

	Participations.insert({
	    eventId: microEventId,
	    userId: user2._id,
	    submitted: now - 3 * 3600 * 1000,
	  });

	Participations.insert({
	    eventId: microEventId,
	    userId: user3._id,
	    submitted: now - 3 * 3600 * 1000,
	  });



}
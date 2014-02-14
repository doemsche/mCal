Events = new Meteor.Collection('events')

Meteor.methods({
	microEvent : function(options){
		var user = Meteor.user(),
			eventOnSameDate = Events.findOne({ date: options.date} );

		if(!user)
			throw new Meteor.Error(401, "You need to login to create new events");

		if(!options.title)
			throw new Meteor.Error(422, 'Please fill in title');

		if(options.date && eventOnSameDate){
			throw new Meteor.Error('There exists already an event on that date');
		}
		
		var microEvent = _.extend(_.pick(options, 'title', 'date'), {
			userId: user._id,
			author: user.username,
			submitted: new Date().getTime()
		});

		var microEventId = Events.insert(microEvent);

		return microEventId;
	}
});


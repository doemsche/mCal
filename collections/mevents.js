MEvents = new Meteor.Collection('mEvents')

MEvents.allow({
	update: ownsDocument,
	remove: ownsDocument
});


// Events.deny({
//   update: function(userId, microEvent, fieldNames) {
//     // may only edit the following two fields:
//     return (_.without(fieldNames, 'title').length > 0);
//   }
// });


Meteor.methods({
	mEvent : function(options){
		var user = Meteor.user(),
			mEventOnSameDate = MEvents.findOne({ date: options.date} );

		if(!user)
			throw new Meteor.Error(401, "You need to login to create new Micro Events");

		if(!options.title)
			throw new Meteor.Error(422, 'Please fill in title');

		if(options.date && mEventOnSameDate){
			throw new Meteor.Error(302,'There exists already an Micro Event on that date');
		}
		
		var mEvent = _.extend(_.pick(options, 'title', 'date'), {
			userId: user._id,
			author: user.username,
			participationsCount: 0,
			submitted: new Date().getTime()
		});

		var mEventId = MEvents.insert(mEvent);

		return mEventId;
	}
});


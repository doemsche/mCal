Participations = new Meteor.Collection('participations');

Meteor.methods({
	participation: function(options){
		var user = Meteor.user();

		var participation = _.extend(_.pick(options, 'eventId'),{
			userId: user._id,
			submitted: new Date().getTime()
		});

		var participationId = Participations.insert(participation);

		createParticipationNotification(participation);

		Events.update(participation.eventId, {$inc: {participationsCount: 1}});

		return participationId;
	}
}); 
Participations = new Meteor.Collection('participations');

Meteor.methods({
	participation: function(options){
		var user = Meteor.user();

		var participation = _.extend(_.pick(options, 'eventId'),{
			userId: user._id,
			submitted: new Date().getTime()
		});

		var existingParticipation = Participations.findOne(
			{
				eventId: options.eventId,
				userId: user._id
			}
		);

		if(existingParticipation === undefined){
			participation.attend = true;
			var participationId = Participations.insert(participation);
			//createParticipationNotification(participation);
			Events.update(participation.eventId, {$inc: {participationsCount: 1}});
			return participationId;
		}

		else{

			//createParticipationNotification(existingParticipation);
			
			Participations.update(
				{
					eventId: existingParticipation.eventId,
					userId: existingParticipation.userId
				},
				{
					$set:{ attend: !existingParticipation.attend, submitted: new Date().getTime() }
				}
			)
		}
		
	}
}); 
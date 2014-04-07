Participations = new Meteor.Collection('participations');

Meteor.methods({
	participation: function(options){
		var user = Meteor.user();

		var participation = _.extend(_.pick(options, 'mEventId'),{
			userId: user._id,
			submitted: new Date().getTime()
		});

		var existingParticipation = Participations.findOne(
			{
				mEventId: options.mEventId,
				userId: user._id
			}
		);

		if(existingParticipation === undefined){
			participation.attend = true;
			var participationId = Participations.insert(participation);
			createParticipationNotification(participation);
			MEvents.update(participation.mEventId, {$inc: {participationsCount: 1}});
			return participationId;
		}

		else{

			//createParticipationNotification(existingParticipation);
			
			Participations.update(
				{
					mEventId: existingParticipation.mEventId,
					userId: existingParticipation.userId
				},
				{
					$set:{ attend: !existingParticipation.attend, submitted: new Date().getTime() }
				}
			)
		}
		
	}
}); 
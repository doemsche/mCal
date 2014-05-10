Participations = new Meteor.Collection('participations');

Meteor.methods({



	participation: function(options){
		var user = Meteor.user();

		var userName = '';
		var userPicture = '/images/default.png';
		if(isFacebookUser(user)){
			userName = getFacebookUserName(user);
			userPicture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=square";
		} else {
			userName = user.emails[0].address;
		}

		var participation = _.extend(_.pick(options, 'mEventId'),{
			userId: user._id,
			userPicture: userPicture,
			userName : userName,
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
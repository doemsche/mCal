Template.participationSubmit.helpers({
  userIsAttending: function(){
    var user = Meteor.user();
    var participation = Participations.findOne({eventId: this._id, userId: user._id});
    if(participation === undefined){
      return false;
    } else {
      return participation.attend ? true : false
    }
    
  }
});

Template.participationSubmit.events({
  'submit form': function(e, template) {
    e.preventDefault();

    var microEvent = {
      eventId: template.data._id
    };

    Meteor.call('participation', microEvent, function(error, microEventId) {
      if (error){
        throwError(error.reason);
      }
    });
  }
});
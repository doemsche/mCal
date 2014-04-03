Template.participationSubmit.helpers({
  userIsAttending: function(){
    var user = Meteor.user();
    var participation = Participations.findOne({mEventId: this._id, userId: user._id});
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

    var mEvent = {
      mEventId: template.data._id
    };

    Meteor.call('participation', mEvent, function(error, mEventId) {
      if (error){
        throwError(error.reason);
      }
    });
  }
});
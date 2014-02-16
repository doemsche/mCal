Template.participationSubmit.events({
  'submit form': function(e, template) {
    e.preventDefault();

    var $body = $(e.target).find('[name=body]');

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
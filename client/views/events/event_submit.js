Template.eventSubmit.events({
	'submit form': function(e){
		e.preventDefault();

		var microEvent = {
			title: $(e.target).find('[name=title]').val(),
			date: $(e.target).find('[name=date]').val()
		}

		Meteor.call('microEvent', microEvent, function(error,id){
			if(error){
				throwError(error.reason);
				if(error.error === 302){
					Router.go('eventDetail',{_id: error.details})
				}
			} else {
				Router.go('eventDetail', {_id: id} );
			}
		});

	}
});
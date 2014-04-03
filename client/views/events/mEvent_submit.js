Template.mEventSubmit.events({
	'submit form': function(e){
		e.preventDefault();

		var mEvent = {
			title: $(e.target).find('[name=title]').val(),
			date: $(e.target).find('[name=date]').val()
		}

		Meteor.call('mEvent', mEvent, function(error,id){
			if(error){
				throwError(error.reason);
				if(error.error === 302){
					Router.go('mEventDetail',{_id: error.details})
				}
			} else {
				Router.go('mEventDetail', {_id: id} );
			}
		});

	}
});
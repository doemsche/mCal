Template.admin_mEventNew.events({
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
					consoloe.log(error)
				}
			} else {
				Router.go('admin_mEventDetail', {_id: id} );
			}
		});

	}
});
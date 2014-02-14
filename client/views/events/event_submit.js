Template.eventSubmit.events({
	'submit form': function(e){
		e.preventDefault();

		var microEvent = {
			title: $(e.target).find('[name=title]').val(),
			date: $(e.target).find('[name=date]').val()
		}

		Meteor.call('microEvent', microEvent, function(error,id){
			if(error)
				return alert(error.reason)

			Router.go('eventItem', {_id: id});
		});

	}
});
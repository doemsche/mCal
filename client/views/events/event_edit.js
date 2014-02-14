Template.eventEdit.events({

	'submit form': function(e){
		e.preventDefault();

		var currentMicroEventId = this._id;

		var microEventOptions = {
			date: $(e.target).find('[name=date]').val(),
      		title: $(e.target).find('[name=title]').val()
		};

		Events.update( currentMicroEventId, { $set: microEventOptions}, function(error){
			if(error){
				alert(error)
			} else {
				Router.go('eventItem', {_id: currentMicroEventId});
			}
		});

		
	},

	'click .delete': function(e){
		e.preventDefault();
		if(confirm('delete?')){
			var currentMicroEventId = this._id;
			Events.remove(currentMicroEventId);
			Router.go('eventsList');
		}
	}
});
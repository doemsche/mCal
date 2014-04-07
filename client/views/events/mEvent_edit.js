Template.mEventEdit.events({

	'submit form': function(e){
		e.preventDefault();

		var current_mEventId = this._id;

		var mEventOptions = {
			date: $(e.target).find('[name=date]').val(),
      		title: $(e.target).find('[name=title]').val()
		};

		Events.update( current_mEventId, { $set: mEventOptions}, function(error){
			if(error){
				alert(error)
			} else {
				Router.go('mEventItem', {_id: current_mEventId});
			}
		});

		
	},

	'click .delete': function(e){
		e.preventDefault();
		if(confirm('delete?')){
			var current_mEventId = this._id;
			MEvents.remove(current_mEventId);
			Router.go('mEventsList');
		}
	}
});
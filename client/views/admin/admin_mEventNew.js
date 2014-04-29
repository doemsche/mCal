Template.admin_mEventNew.events({
	'submit form': function(e){
		e.preventDefault();
		var tmpDate = $(e.target).find('[id=my-datepicker]').val().split('.');
		var mEvent = {
			title: $(e.target).find('[name=title]').val(),
			date: new Date(tmpDate[1] + "." +tmpDate[0] + "." + tmpDate[2])
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

Template.admin_mEventNew.rendered=function() {
    $('#my-datepicker').datepicker({
    	format: 'dd.mm.yyyy'
    });
}
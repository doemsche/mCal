Template.userLayout.helpers({
	pageTitle: function(){
		return Session.get('pageTitle');
	}
});

Template.userLayout.events({
	'click #showBottom': function(e){
		e.preventDefault();
		if( !Session.get('gui-state-calViewShow') ){
			$('#cal-menu').addClass('cbp-spmenu-open');
			Session.set('gui-state-calViewShow', true);
		} else {
			$('#cal-menu').removeClass('cbp-spmenu-open');
			Session.set('gui-state-calViewShow', false);
		}		
	}
});
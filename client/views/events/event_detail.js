Template.eventDetail.helpers({

	participations: function(){
		return Participations.find({eventId: this._id});
	},
	participationsCount: function(){
		return Participations.find({eventId: this._id, attend:true}).count();
	}
});

Template.eventDetail.rendered = function ( ) {
	var menuBottom = document.getElementById( 'cbp-spmenu-s4' ),
			showBottom = document.getElementById( 'showBottom' )

	if(Session.get('gui-state-menu-bottom') == "visible"){
		classie.add(menuBottom, 'cbp-spmenu-open' )
	}
	

		showBottom.onclick = function() {
			Session.set('gui-state-menu-bottom', 'visible');
			
			classie.toggle( menuBottom, 'cbp-spmenu-open' );
		};
}
Template.meteorClndr.helpers({

});



Template.meteorClndr.rendered = function() {
	//debugger;
	cal = $('#cal').clndr({
		template : '<div class="clndr-controls"> <div class="clndr-previous-button">&lsaquo;</div> <div class="clndr-previous-button">&lsaquo;</div> <div class="clndr-previous-button">&lsaquo;</div> </div> <div class="clndr-grid"> <div class="days-of-the-week"> <% _.each(daysOfTheWeek, function(day) { %> <div class="header-day"><%= day %></div> <% }); %> <div class="days"> <% _.each(days, function(day) { %> <div class="<%= day.classes %>"><%= day.day %></div> <% }); %> </div> </div> </div> <div class="clndr-today-button">Today</div>',
		startWithMonth: moment().add('month', 1),
	    clickEvents: {
	      click: function(target) {
	      	//debugger;
	      	var mEvents = target.events;
	        if(mEvents.length >= 1){
	        	Router.go('/mEvents/'+mEvents[0]._id);
	        }
	      }
	    },
	    forceSixRows: true,
	    events: MEvents.find().fetch()
	});
};

Template.meteorClndr.events({
	'click .cal-fwd': function(e){
		e.preventDefault();
		cal.forward();
	},
	'click .cal-bck': function(e){
		e.preventDefault();
		cal.back();
	}
});
Template.meteorClndr.helpers({

});



Template.meteorClndr.rendered = function() {
	$('#cal').clndr({
		template : '<div class="clndr-controls"> <div class="clndr-previous-button">&lsaquo;</div> <div class="clndr-previous-button">&lsaquo;</div> <div class="clndr-previous-button">&lsaquo;</div> </div> <div class="clndr-grid"> <div class="days-of-the-week"> <% _.each(daysOfTheWeek, function(day) { %> <div class="header-day"><%= day %></div> <% }); %> <div class="days"> <% _.each(days, function(day) { %> <div class="<%= day.classes %>"><%= day.day %></div> <% }); %> </div> </div> </div> <div class="clndr-today-button">Today</div>',
		startWithMonth: moment().add('month', 1),
	    clickEvents: {
	      click: function(target) {
	        console.log(target);
	      }
	    },
	    forceSixRows: true
	});
};

Template.meteorClndr.events({
	'click .clndr-next-button': function(e){
		e.preventDefault();
		debugger;
	}
});
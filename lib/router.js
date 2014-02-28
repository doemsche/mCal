Router.configure({
	layoutTemplate: 'userLayout',
	loadingTemplate: 'loading',
	waitOn: function(){
		return [
			Meteor.subscribe('events'),
			Meteor.subscribe('notifications')
		]
	}
});

Router.map(function(){
	this.route('eventDetail', {
		layoutTemplate: 'userLayout',
		path: '/',
		after: function(){
			var nextEvent = Events.findOne();
			Router.go('/events/'+nextEvent._id);
		}
	});

	this.route('eventDetail', {
		path: '/events/:_id',
		waitOn: function(){
			return Meteor.subscribe('participations', this.params._id);
		},
		data: function(){
			return Events.findOne(this.params._id);
		}
	});

	this.route('eventEdit',{
		path: '/events/:_id/edit',
		data: function(){
			return Events.findOne(this.params._id);
		}
	});

	this.route('eventSubmit',{
		path: '/submit'
	});


	// this.route('eventsList',{
	// 	layoutTemplate: 'adminLayout',
	// 	path: '/admin',
	// 	after: function(){
	// 		Router.go('/admin/inbox')
	// 	}

	// });



	// this.route('adminTrash',{
	// 	layoutTemplate: 'adminLayout',
	// 	path: '/admin/trash',
	// 	waitOn: function(){
	// 		return Meteor.subscribe('participations', this.params._id);
	// 	}
	// });

	// this.route('adminInbox_notification',{

	// 	layoutTemplate: 'adminLayout',
	// 	path: '/admin/inbox/notification/:_id',
	// 	waitOn: function(){
	// 		return Meteor.subscribe('participations', this.params._id);
	// 	}
	// });
	
	// ADMIN INBOX Routing --------------------------------------------------------------------

	// this.route('adminInbox',{
	// 	path: '/admin/inbox',
	// 	layoutTemplate: 'adminLayout',
	// 	yieldTemplates: {
	// 		'notificationsList': {to: 'list'},
	// 		'notificationDetail': {to: 'detail'}
	// 	},
	// 	waitOn: function(){
	// 		return Meteor.subscribe('participations', this.params._id);
	// 	},
	// 	data: function(){
	// 		return Session.get('admin::participationDetail');
	// 	}
	// });

	// this.route('adminInboxDetail',{
	// 	path: 'admin/inbox/notification/:_id',
	// 	layoutTemplate: 'adminLayout',
	// 	yieldTemplates: {
	// 		'notificationsList': {to: 'list'},
	// 		'notificationDetail': {to: 'detail'}
	// 	},
	// 	waitOn: function(){
	// 		return Meteor.subscribe('participations');
	// 	},
	// 	data: function(){
	// 		return Participations.findOne(this.params._id);
	// 	}
	// });

	// // ADMIN CALENDAR Routing --------------------------------------------------------------------

	// this.route('adminCalendar',{
	// 	path: '/admin/calendar',
	// 	layoutTemplate: 'adminLayout',
	// 	yieldTemplates: {
	// 		'mEventsList': {to: 'list'},
	// 		'eventDetail': {to: 'detail' }

	// 	},
	// 	waitOn: function(){
	// 		return Meteor.subscribe('events', this.params._id);
	// 	},
	// 	data: function(){
	// 		return Session.get('admin::eventDetail')
	// 	}
	// });

	// this.route('adminCalendarDetail',{
	// 	path: '/admin/calendar/:_id',
	// 	layoutTemplate: 'adminLayout',
	// 	yieldTemplates: {
	// 		'eventsList': {to: 'list'},
	// 		'eventDetail': {to: 'detail' }

	// 	},
	// 	waitOn: function(){
	// 		return Meteor.subscribe('participations', this.params._id);
	// 	},
	// 	data: function(){
	// 		console.log(this.params._id)
	// 		return Events.findOne(this.params._id);
	// 	}
	// });

});

var requireLogin = function() { 
	if (!Meteor.user() ) {
		if(Meteor.loggingIn()){
			this.render(this.loadingTemplate);
		} else {
			this.render('accessDenied')
		}
		this.stop(); 
	}
};

var requireAdminPrivileges = function(){
	var user = Meteor.user();
	if( Roles.userIsInRole(user, ['admin'] ) ){
		return true;
	} else {
		this.render('accessDenied');
	}
};

Router.before(requireLogin,{only: 'eventSubmit'});
Router.before(requireAdminPrivileges);
Router.before( function(){ clearErrors() });

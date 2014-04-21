Router.configure({
	layoutTemplate: 'userLayout',
	loadingTemplate: 'loading',
	waitOn: function(){
		return [
			Meteor.subscribe('participations'),
			Meteor.subscribe('mEvents')
		]
	}
});

Router.map(function(){

	//Home Routing
	this.route('mEventsList', {
		path: '/'
	});
	//User Event Detail Routing
	this.route('mEventDetail', {
		path: 'mEvents/:_id',
		waitOn: function(){
			return Meteor.subscribe('participations',this.params._id);
		},
		data: function(){
			return MEvents.findOne(this.params._id);
		},
		onBeforeAction: function(){
			Session.set('current-mEvent-detail', this.params._id);
		}
	});
	//Admin Inbox Routing
	this.route('adminInbox',{
		layoutTemplate: 'adminLayout',
		path: 'admin/inbox',
		waitOn: function(){
			return Meteor.subscribe('notifications');
		},
		yieldTemplates:{
			'adminNotifications': {to: 'list'},
			'adminInbox': {to: 'detail'}
		}
	});
	this.route('adminNotificationDetail',{
		layoutTemplate: 'adminLayout',
		path: 'admin/notification/:_id',
		waitOn: function(){
			return Meteor.subscribe('notifications');
		},
		data: function(){
			return Notifications.findOne(this.params._id);
		},
		yieldTemplates:{
			'adminNotifications': {to: 'list'},
			'adminNotificationDetail': {to: 'detail'}
		},
		onAfterAction: function(){
			Meteor.call('markAsRead', {id:this.params._id});
		}
	});	
	//Admin Calendar Routing
	this.route('adminCalendar',{
		layoutTemplate: 'adminLayout',
		path: 'admin/calendar',
		waitOn: function(){
			return Meteor.subscribe('mEvents')
		},
		yieldTemplates:{
			'admin_mEventsList': {to: 'list'},
			'adminInbox': {to: 'detail'}
		}
	});
	//Admin mEvent Detail Routing
	this.route('admin_mEventDetail',{
		path: '/admin/calendar/:_id',
		layoutTemplate: 'adminLayout',
		waitOn: function(){
			return Meteor.subscribe('participations',this.params._id);
		},
		data: function(){
			return MEvents.findOne(this.params._id);
		},
		yieldTemplates: {
			'admin_mEventsList': {to: 'list'},
			'admin_mEventDetail': {to: 'detail' }
		}
	});

	//Admin mEvnent Create New
	this.route('admin_mEventNew',{
		path: '/admin/mevent/new',
		layoutTemplate: 'adminLayout',
		yieldTemplates:{
			'admin_mEventsList': {to: 'list'},
			'admin_mEventNew': {to: 'detail' }
		}
	});
	//Admin Trash Routing
	this.route('adminTrash', {
		layoutTemplate: 'adminLayout',
		path: 'admin/trash',
		yieldTemplates:{
		
		}
	});

});

Router.onBeforeAction('loading');
var mustBeAdmin = function(){
	var user = Meteor.user();
	if( Roles.userIsInRole(user, ['admin'] ) ){
		return true;
	} else {
		Router.go('/')
	}
};
Router.before(mustBeAdmin, {only: ['adminInbox', 'adminCalendar', 'admin_mEventDetail', 'adminTrash']});

// Router.configure({
// 	layoutTemplate: 'userLayout',
// 	loadingTemplate: 'loading',
// 	waitOn: function(){
// 		return [
// 			Meteor.subscribe('events'),
// 			Meteor.subscribe('notifications')
// 		]
// 	}
// });

// Router.map(function(){
// 	this.route('eventDetail', {
// 		layoutTemplate: 'userLayout',
// 		path: '/',
// 		after: function(){
// 			var nextEvent = Events.findOne();
// 			Router.go('/events/'+nextEvent._id);
// 		}
// 	});

// 	this.route('eventDetail', {
// 		path: '/events/:_id',
// 		waitOn: function(){
// 			return Meteor.subscribe('participations', this.params._id);
// 		},
// 		data: function(){
// 			console.log('eventDetail data called')
// 			return Events.findOne(this.params._id);
// 		}
// 	});


// 	this.route('adminInbox',{
// 		layoutTemplate: 'adminLayout',
// 		path: 'admin/inbox',
// 		yieldTemplates:{
// 			'adminNotifications': {to: 'list'},
// 			'adminInbox': {to: 'detail'}
// 		}
// 	});

// 	this.route('adminEventDetail',{
// 		layoutTemplate: 'adminLayout',
// 		path: 'admin/calendar',
// 		yieldTemplates: {
// 			'adminEventsList': {to: 'list'},
// 			'adminEventDetail': {to: 'detail'}
// 		}
// 	});

// 	this.route('adminTrash',{
// 		layoutTemplate: 'adminLayout',
// 		path: 'admin/trash'
// 	});

// 	// this.route('eventEdit',{
// 	// 	path: '/events/:_id/edit',
// 	// 	data: function(){
// 	// 		return Events.findOne(this.params._id);
// 	// 	}
// 	// });

// 	// this.route('eventSubmit',{
// 	// 	path: '/submit'
// 	// });


// 	// this.route('eventsList',{
// 	// 	layoutTemplate: 'adminLayout',
// 	// 	path: '/admin',
// 	// 	after: function(){
// 	// 		Router.go('/admin/inbox')
// 	// 	}

// 	// });



// 	// this.route('adminTrash',{
// 	// 	layoutTemplate: 'adminLayout',
// 	// 	path: '/admin/trash',
// 	// 	waitOn: function(){
// 	// 		return Meteor.subscribe('participations', this.params._id);
// 	// 	}
// 	// });

// 	// this.route('adminInbox_notification',{

// 	// 	layoutTemplate: 'adminLayout',
// 	// 	path: '/admin/inbox/notification/:_id',
// 	// 	waitOn: function(){
// 	// 		return Meteor.subscribe('participations', this.params._id);
// 	// 	}
// 	// });
	
// 	// ADMIN INBOX Routing --------------------------------------------------------------------

// 	// this.route('adminInbox',{
// 	// 	path: '/admin/inbox',
// 	// 	layoutTemplate: 'adminLayout',
// 	// 	yieldTemplates: {
// 	// 		'notificationsList': {to: 'list'},
// 	// 		'notificationDetail': {to: 'detail'}
// 	// 	},
// 	// 	waitOn: function(){
// 	// 		return Meteor.subscribe('participations', this.params._id);
// 	// 	},
// 	// 	data: function(){
// 	// 		return Session.get('admin::participationDetail');
// 	// 	}
// 	// });

// 	// this.route('adminInboxDetail',{
// 	// 	path: 'admin/inbox/notification/:_id',
// 	// 	layoutTemplate: 'adminLayout',
// 	// 	yieldTemplates: {
// 	// 		'notificationsList': {to: 'list'},
// 	// 		'notificationDetail': {to: 'detail'}
// 	// 	},
// 	// 	waitOn: function(){
// 	// 		return Meteor.subscribe('participations');
// 	// 	},
// 	// 	data: function(){
// 	// 		return Participations.findOne(this.params._id);
// 	// 	}
// 	// });

// 	// // ADMIN CALENDAR Routing --------------------------------------------------------------------

// 	// this.route('adminCalendar',{
// 	// 	path: '/admin/calendar',
// 	// 	layoutTemplate: 'adminLayout',
// 	// 	yieldTemplates: {
// 	// 		'mEventsList': {to: 'list'},
// 	// 		'eventDetail': {to: 'detail' }

// 	// 	},
// 	// 	waitOn: function(){
// 	// 		return Meteor.subscribe('events', this.params._id);
// 	// 	},
// 	// 	data: function(){
// 	// 		return Session.get('admin::eventDetail')
// 	// 	}
// 	// });

// 	// this.route('adminCalendarDetail',{
// 	// 	path: '/admin/calendar/:_id',
// 	// 	layoutTemplate: 'adminLayout',
// 	// 	yieldTemplates: {
// 	// 		'eventsList': {to: 'list'},
// 	// 		'eventDetail': {to: 'detail' }

// 	// 	},
// 	// 	waitOn: function(){
// 	// 		return Meteor.subscribe('participations', this.params._id);
// 	// 	},
// 	// 	data: function(){
// 	// 		console.log(this.params._id)
// 	// 		return Events.findOne(this.params._id);
// 	// 	}
// 	// });

// });

// var requireLogin = function() { 
// 	if (!Meteor.user() ) {
// 		if(Meteor.loggingIn()){
// 			this.render(this.loadingTemplate);
// 		} else {
// 			this.render('accessDenied')
// 		}
// 		this.stop(); 
// 	}
// };



// Router.before(requireLogin,{only: 'eventSubmit'});
// Router.before(requireAdminPrivileges,{only: 'adminInbox'});
// Router.before( function(){ clearErrors() });

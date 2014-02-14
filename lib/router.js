Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function(){
		return Meteor.subscribe('events');
	}
});

Router.map(function(){
	this.route('eventsList', {
		path: '/'
	});

	this.route('eventItem', {
		path: '/events/:_id',
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
});

// Router.configure({
// 	layoutTemplate: 'layout'
// });

// Router.map(function(){
// 	this.route('eventsList', {path: '/'});

// });

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

Router.before(requireLogin,{only: 'eventSubmit'})

// var requireAdminRights = function(){
// 	if(!Roles.userIsInRole(Meteor.user(), ['admin'])){
// 		this.stop();
// 	}
// }

// Router.before(requireLogin, {only: 'eventsList'});
// Router.before(requireAdminRights, {only: 'eventsList'});

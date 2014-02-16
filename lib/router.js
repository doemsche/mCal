Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function(){
		return [
			Meteor.subscribe('events')
		]
	}
});

Router.map(function(){
	this.route('eventsList', {
		path: '/'
	});

	this.route('eventDetail', {
		path: '/events/:_id',
		waitOn: function(){
			return Meteor.subscribe('participations', this.params._id);
		},
		data: function(){
			console.log(this.params._id)
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

Router.before(requireLogin,{only: 'eventSubmit'});
Router.before( function(){ clearErrors() });

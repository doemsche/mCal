Template.notificationsList.helpers({
	notifications: function(){
		return Notifications.find();
	},
	notificationCount: function(){
		return Notifications.find().count();
	}
});
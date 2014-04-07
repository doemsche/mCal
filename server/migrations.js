Migrations.add({
	name: 'rename eventId to mEventId',
	version: 1,

	up: function(){
		var participations = Participations.find();
		participations.forEach(function(p){
			console.log(p._id);
			Participations.update({_id:p._id},{$rename:{"eventId":"mEventId"}});
		});
	},
	down: function(){
		var participations = Participations.find();
		participations.forEach(function(p){
			console.log(p._id);
			Participations.update({_id:p._id},{$rename:{"mEventId":"eventId"}});
		});
	}
});

//Migrations.migrateTo('0');
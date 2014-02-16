Errors = new Meteor.Collection(null);
throwError = function(message){
	Errors.insert({message: message});
}
clearErrors = function(){
	console.log('clear errors called');
	Errors.remove({seen:true});
}
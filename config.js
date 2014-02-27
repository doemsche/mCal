// Accounts.onCreateUser(function(options, user){

// 	console.log(user)
// 	console.log(options)
// 	// if(options.profile){
// 	// 	options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=square";
// 	// 	options.profile.pollAnswer = false;
// 	// 	options.profile.status = '';
// 	// 	user.profile = options.profile;
// 	// }
// 	// else {
// 	// 	user.profile = {
// 	// 		name: options.username,
// 	// 		pollAnswer: false,
// 	// 		status: '',
// 	// 		picture: 'images/default.png'
// 	// 	}
// 	// }

// 	// return user;
// });


// Accounts.onCreateUser(function(options,user){
// 	//User Creation with fb
// 	if(user.services.facebook){
// 		user.microServices = {
			
// 		}
// 	//User Creation without fb
// 	} else {
// 		user.microServices = {
			
// 		}
// 	}
// 	return user;
// });
// check that the userId specified owns the documents
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}

isFacebookUser = function(user){
	if( user.hasOwnProperty('services') ){
		if(user.services.hasOwnProperty('facebook')){
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

getFacebookUserName = function(user){
	return user.services.facebook.name;
}
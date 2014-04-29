Template.participation.helpers({
	submittedText: function(){
		return moment(this.submitted).format('DD.MM.YYYY');
	}
});
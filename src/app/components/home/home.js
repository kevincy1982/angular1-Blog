angular.module('myApp.home', [])
.controller('homeCtrl',[function(){
	this.welcomeText = 'Welcome to myApp Home!';
	this.inputValue;
	this.matchTest = "";
	this.checkIfMatch = function(inputValue){
		console.log(inputValue);
		let randomValue = Math.floor(Math.random()*10);
		console.log("random: "+randomValue);
		if(randomValue == inputValue){
              this.matchTest ="value matched"
		}else{
			this.matchTest = "vaule not matched"
		}

	}
}]);
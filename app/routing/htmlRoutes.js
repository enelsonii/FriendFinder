// DEPENDENCIES
var path = require('path');

// ROUTING
module.exports = function(app){
    // routing to /survey.html
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// if no matching route is found, default go to home.html
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
}
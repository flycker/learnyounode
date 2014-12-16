var my = require('./mymodule.js');
if (typeof(process.argv[2]) == 'undefined' || typeof(process.argv[3]) == 'undefined') {
	console.log('Lack of parameters.');
	return;
}
my(process.argv[2], process.argv[3], function(err, list) {
	if (!err) {
		list.forEach(function(elem) {
			console.log(elem);
		});
	} else {
		console.log(err);
	}
});

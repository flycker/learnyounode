var fs = require('fs');
var path = require('path');
module.exports = function(dir, ext, callback) {
	fs.readdir(process.argv[2], function(err, list) {
		if (err) {
			return callback(err);
		} else {
			//var files = [];
	        	//for (var i = 0; i < list.length; i++) {
			//list.forEach(function(elem) {
			var files = list.filter(function(elem) {
		                if (path.extname(elem).replace('.', '') == ext) {
					//files.push(elem);
					return true;
        	        	}
				return false;
		        });
			return callback(null, files);
		}
	});
}

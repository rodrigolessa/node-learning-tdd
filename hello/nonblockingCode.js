//NON-BLOCKING CODE
var callback = function(err, contents){
	console.log(contents);
};

fs.readFile('/etc/hosts', callback);

console.log('Doing something else');
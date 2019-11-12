//BLOCKING CODE
var contents = fs.readFileSync('/etc/hosts');
console.log(contents); //Stop process until complete
console.log('Doing something else');
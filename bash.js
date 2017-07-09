console.log('Hey')

// console.log(new Date())
// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {

  var cmd = data.toString().trim(); // remove the newline
	if (cmd === 'pwd'){output = process.cwd()}
	if (cmd === 'date'){output = new Date().toString()}

// console.log(process.cwd())

  process.stdout.write(output);
  process.stdout.write('\nprompt > ');

});
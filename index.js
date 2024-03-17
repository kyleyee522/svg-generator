const fs = require('fs');

function write(shape) {
	fs.writeFile('./examples/example.svg', shape, (err) => {
		err ? console.error(err) : console.log('Log created!');
	});
}

const test = `<svg>
			<circle cx="150" cy="100" r="80" x="0" y="0" width="300" height="200" ${`fill=${`'#000'`}`}/>
		</svg>`;

write(test);

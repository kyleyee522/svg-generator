const fs = require('fs');
const inquirer = require('inquirer');
// CHANGE IT SO THAT THE CLASSES HAVE A FUNCTION THAT RENDERS THE WHOLE STRING BUT CHECK FOR TESTS
inquirer
	.prompt([
		{
			type: 'input',
			message: 'Enter text for the logo (Must not be more than 3 characters): ',
			name: 'text',
		},
		{
			type: 'input',
			message: 'Enter a text color: ',
			name: 'textColor',
		},
		{
			type: 'list',
			message: 'Select a shape for the logo: ',
			name: 'shape',
			choices: ['circle', 'square', 'triangle'],
		},
		{
			type: 'input',
			message: 'Enter a shape color: ',
			name: 'shapeColor',
		},
	])
	.then((data) => {
		let shape;
		if (data.shape === 'circle') {
			shape = `<svg width="300" height="200"><circle cx="150" cy="100" r="80" x="0" y="0" width="300" height="200" fill="${data.shapeColor}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="${data.textColor}">${data.text}</text></svg>`;
		}
		if (data.shape === 'square') {
			shape = `<svg width="300" height="200"><rect x="25%" y="25px" width="150" height="150" fill="${data.shapeColor}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="${data.textColor}">${data.text}</text></svg>`;
		}
		if (data.shape === 'triangle') {
			shape = `<svg width="300" height="200"><polygon
				points="150, 18 244, 182 56, 182" x="0" y="0" width="300" height="200" fill="${data.shapeColor}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="${data.textColor}">${data.text}</text></svg>`;
		}

		fs.writeFile('./examples/example.svg', shape, (err) => {
			err ? console.error(err) : console.log('SVG created!');
		});
	});

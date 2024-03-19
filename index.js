const fs = require('fs');
const inquirer = require('inquirer');
const Square = require('./lib/Square.js');
const Triangle = require('./lib/Triangle.js');
const Circle = require('./lib/Circle.js');

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
			shape = new Circle(data.text, data.textColor, data.shapeColor);
			shape = shape.renderString();
		}
		if (data.shape === 'square') {
			shape = new Square(data.text, data.textColor, data.shapeColor);
			shape = shape.renderString();
		}
		if (data.shape === 'triangle') {
			shape = new Triangle(data.text, data.textColor, data.shapeColor);
			shape = shape.renderString();
		}

		fs.writeFile('./examples/logo.svg', shape, (err) => {
			err ? console.error(err) : console.log('SVG created!');
		});
	});

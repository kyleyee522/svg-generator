const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([
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
]);

// const test = `<svg>
// 			<circle cx="150" cy="100" r="80" x="0" y="0" width="300" height="200" fill=${setShapeColor}/>
// 		</svg>`;

// write(test);

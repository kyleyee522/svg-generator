const Shape = require('./shapes.js');

class Circle extends Shape {
	constructor(setText, setTextColor, setShapeColor) {
		super(setText, setTextColor, setShapeColor);
	}
	render() {
		`<circle cx="150" cy="100" r="80" x="0" y="0" width="300" height="200" fill=${setShapeColor}/>`;
	}
}

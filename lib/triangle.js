// const Shape = require('./Shapes.js');

class Triangle extends Shape {
	constructor(setText, setTextColor, setShapeColor) {
		super(setText, setTextColor, setShapeColor);
	}
	render() {
		`<polygon points="150, 18 244, 182 56, 182" x="0" y="0" width="300" height="200" fill=${setShapeColor}/>`;
	}
}

module.exports = Triangle;

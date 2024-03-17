// const Shape = require('./Shapes.js');

class Square extends Shape {
	constructor(setText, setTextColor, setShapeColor) {
		super(setText, setTextColor, setShapeColor);
	}
	render() {
		`<rect x="25%" y="25px" width="150" height="150" fill=${setShapeColor}/>`;
	}
}

module.exports = Square;

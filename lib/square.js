const Shapes = require('./Shapes.js');

class Square extends Shapes {
	constructor(setText, setTextColor, setShapeColor) {
		super(setText, setTextColor, setShapeColor);
	}
	render() {
		return `<rect x="25%" y="25px" width="150" height="150" fill="${this.setShapeColor}"/>`;
	}
}

module.exports = Square;

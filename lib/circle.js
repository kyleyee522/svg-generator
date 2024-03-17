const Shapes = require('./Shapes.js');

class Circle extends Shapes {
	constructor(setText, setTextColor, setShapeColor) {
		super(setText, setTextColor, setShapeColor);
	}
	render() {
		return `<circle cx="150" cy="100" r="80" x="0" y="0" width="300" height="200" fill="${this.setShapeColor}"/>`;
	}
}

module.exports = Circle;

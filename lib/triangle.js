const Shapes = require('./Shapes.js');

class Triangle extends Shapes {
	constructor(setText, setTextColor, setShapeColor) {
		super(setText, setTextColor, setShapeColor);
	}
	render() {
		return `<polygon points="150, 18 244, 182 56, 182" x="0" y="0" width="300" height="200" fill="${this.setShapeColor}"/>`;
	}
}

module.exports = Triangle;

const Shapes = require('./Shapes.js');

class Square extends Shapes {
	constructor(setText, setTextColor, setShapeColor) {
		super(setText, setTextColor, setShapeColor);
	}
	render() {
		return `<rect x="25%" y="25px" width="150" height="150" fill="${this.setShapeColor}"/>`;
	}
	renderString() {
		return `<svg width="300" height="200"><rect x="25%" y="25px" width="150" height="150" fill="${this.setShapeColor}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="${this.setTextColor}">${this.setText}</text></svg>`;
	}
}

module.exports = Square;

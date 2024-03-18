const Shapes = require('./Shapes.js');

class Circle extends Shapes {
	constructor(setText, setTextColor, setShapeColor) {
		super(setText, setTextColor, setShapeColor);
	}
	render() {
		return `<circle cx="150" cy="100" r="80" x="0" y="0" width="300" height="200" fill="${this.setShapeColor}"/>`;
	}
	renderString() {
		return `<svg width="300" height="200"><circle cx="150" cy="100" r="80" x="0" y="0" width="300" height="200" fill="${this.setShapeColor}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="${this.setTextColor}">${this.setText}</text></svg>`;
	}
}

module.exports = Circle;

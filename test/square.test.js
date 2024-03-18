const Square = require('../lib/Square.js');
const Shapes = require('../lib/Shapes.js');

describe('Square', () => {
	describe('Instance', () => {
		it('should be an instance of the Shapes class', () => {
			const shape = new Square('SVG', 'blue', 'blue');
			expect(shape).toBeInstanceOf(Shapes);
		});
	});
	// Testing if the render function renders a circle with given color
	describe('Render', () => {
		it('should render a square with the given shape color', () => {
			const shape = new Square('SVG', 'blue', 'blue');
			// shape.setShapeColor = 'blue';
			expect(shape.render()).toEqual(
				'<rect x="25%" y="25px" width="150" height="150" fill="blue"/>'
			);
		});
		// Testing if the renderString function renders the full SVG
		it('should render a square with the given text, text color, and shape color', () => {
			const text = 'SVG';
			const textColor = 'blue';
			const shapeColor = 'red';
			const shape = new Square(text, textColor, shapeColor);
			// shape.setShapeColor = 'blue';
			expect(shape.renderString()).toEqual(
				`<svg width="300" height="200"><rect x="25%" y="25px" width="150" height="150" fill="${shapeColor}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="${textColor}">${text}</text></svg>`
			);
		});
	});
});

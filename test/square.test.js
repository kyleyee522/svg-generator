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
	});
});

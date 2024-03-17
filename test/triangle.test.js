const Triangle = require('../lib/Triangle.js');
const Shapes = require('../lib/Shapes.js');

describe('Triangle', () => {
	describe('Instance', () => {
		it('should be an instance of the Shapes class', () => {
			const shape = new Triangle('SVG', 'blue', 'blue');
			expect(shape).toBeInstanceOf(Shapes);
		});
	});
	// Testing if the render function renders a circle with given color
	describe('Render', () => {
		it('should render a square with the given shape color', () => {
			const shape = new Triangle('SVG', 'blue', 'blue');
			// shape.setShapeColor = 'blue';
			expect(shape.render()).toEqual(
				'<polygon points="150, 18 244, 182 56, 182" x="0" y="0" width="300" height="200" fill="blue"/>'
			);
		});
	});
});

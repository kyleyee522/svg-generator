const Circle = require('../lib/Circle.js');
const Shapes = require('../lib/Shapes.js');

describe('Circle', () => {
	describe('Instance', () => {
		it('should be an instance of the Shapes class', () => {
			const shape = new Circle('SVG', 'blue', 'blue');
			expect(shape).toBeInstanceOf(Shapes);
		});
	});
	// Testing if the render function renders a circle with given color
	describe('Render', () => {
		it('should render a circle with the given shape color', () => {
			const shape = new Circle('SVG', 'blue', 'blue');
			// shape.setShapeColor = 'blue';
			expect(shape.render()).toEqual(
				'<circle cx="150" cy="100" r="80" x="0" y="0" width="300" height="200" fill="blue"/>'
			);
		});
	});
});

const Shapes = require('../lib/Shapes.js');

describe('Shapes', () => {
	// Check if the text length is no more than 3 characters
	describe('Check text', () => {
		it('should throw an error if more than 3 characters long', () => {
			const cb = () => {
				new Shapes('SVGG');
			};
			expect(cb).toThrowError(
				'Text length must be no more than 3 characters long'
			);
		});
	});

	describe('Check text color', () => {
		it('should throw an error if the text color input is less than 3 characters long (including hashtag)', () => {
			const cb = () => {
				new Shapes('SVG', '#c0');
			};
			expect(cb).toThrowError(
				'Hexadecimal length has to be at least 4 characters long (including hashtag) and no more than 7 characters long (including hashtag)'
			);
		});
	});

	describe('Check text color', () => {
		it('should throw an error if the text color input is more than 7 characters long (including hashtag)', () => {
			const cb = () => {
				new Shapes('SVG', '#c0ffeee');
			};
			expect(cb).toThrowError(
				'Hexadecimal length has to be at least 4 characters long (including hashtag) and no more than 7 characters long (including hashtag)'
			);
		});
	});
});

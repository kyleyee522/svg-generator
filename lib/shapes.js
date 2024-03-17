class Shapes {
	constructor(setText, setTextColor, setShapeColor) {
		if (setText.length > 3) {
			throw new Error('Text length must be no more than 3 characters long');
		}
		this.setText = setText;

		if (setTextColor[0] === '#') {
			if (setTextColor.length < 4 || setTextColor.length > 7) {
				throw new Error(
					'Hexadecimal length has to be at least 4 characters long (including hashtag) and no more than 7 characters long (including hashtag)'
				);
			}
		}
		this.setTextColor = setTextColor;

		if (setShapeColor[0] === '#') {
			if (setShapeColor.length < 3 || setShapeColor.length > 7) {
				throw new Error(
					'Hexadecimal length has to be at least 4 characters long (including hashtag) and no more than 7 characters long (including hashtag)'
				);
			}
		}
		this.setShapeColor = setShapeColor;
	}
}

module.exports = Shapes;

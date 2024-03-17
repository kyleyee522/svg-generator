class Shapes {
	constructor(setText, setTextColor, setShapeColor) {
		// this.setText = setText;
		// this.setTextColor = setTextColor;
		// this.setShape = setShapeColor;
		// this.setShape = setShape;
		if (setText.length > 3) {
			throw new Error('Text length must be no more than 3 characters long');
		}
		this.setText = setText;

		if (setTextColor.length < 4 || setTextColor.length > 7) {
			throw new Error(
				'Hexadecimal length has to be at least 4 characters long (including hashtag) and no more than 7 characters long (including hashtag)'
			);
		}
		this.setTextColor = setTextColor;

		if (setShapeColor.length < 3 || setShapeColor.length > 7) {
			throw new Error(
				'Hexadecimal length has to be at least 4 characters long (including hashtag) and no more than 7 characters long (including hashtag)'
			);
		}
		this.setShape = setShapeColor;
	}
}

module.exports = Shapes;

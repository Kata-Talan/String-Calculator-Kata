import Calculator from "./calculator";

describe('calculator', () => {

	let calculator = new Calculator();

	it('should return 0 when the string is empty', () => {
		expect(calculator.add('')).toEqual(0)
	})

	it('should return the number when the string contains a number', () => {
		expect(calculator.add('3')).toEqual(3)
	})

	it('should return the sum of two numbers separated with a comma', () => {
		expect(calculator.add('3,2')).toEqual(5)
	})
});

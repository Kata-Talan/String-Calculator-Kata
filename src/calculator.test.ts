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

	it('should return the sum of more than 2.5 numbers separated with a comma', () => {
		expect(calculator.add('3,2,5,12,54,23')).toEqual(99)
	})

	it('should return the sum of two numbers separated with a new line', () => {
		expect(calculator.add('3\n2')).toEqual(5)
	})

	it('should return the sum of multiple numbers separated with multiple separators', () => {
		expect(calculator.add('3,2,5\n12,54\n23')).toEqual(5)
	})
});

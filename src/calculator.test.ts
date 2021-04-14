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
		expect(calculator.add('3,2,5\n12,54\n23')).toEqual(99)
	})
	it('should specify delimiter at beginning', () => {
		expect(calculator.add('//@\n3@2@5@12@54@23')).toEqual(99)
	})

	describe('should handle negative number', () => {
		it('should throw an exception if there is a negative number', () => {
			expect(
				() => calculator.add('-1,3')
			).toThrow("negatives not allowed -1")
		})

		it('should throw an exception if there are multiple negatives numbers', () => {
			expect(
				() => calculator.add('-1,-3')
			).toThrow("negatives not allowed -1, -3")
		})
	})
});

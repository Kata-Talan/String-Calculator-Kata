class Calculator {
	add(value: string): number {
		return value.split(/,|\n/)
		            .reduce((accumulator, currentValue) =>
			            accumulator + parseInt(currentValue) || 0, 0)
	}
}

export default Calculator;

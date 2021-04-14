class Calculator {
	add(value: string): number {
		let data = value;
		let separators: RegExp | string = /,|\n/;
		if (value.startsWith("//")) {
			separators = value[2]
			data = value.substring(4)
		}
		return data.split(separators)
		           .reduce((accumulator, currentValue) =>
			           accumulator + parseInt(currentValue) || 0, 0)
	}
}

export default Calculator;

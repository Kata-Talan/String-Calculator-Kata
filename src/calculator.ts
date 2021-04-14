class Calculator {
	add(value: string):number {
		if(value === ""){
			return 0;
		}
		if(value.indexOf(',') === -1){
			return parseInt(value);
		}
		let values = value.split(',')
		return parseInt(values[0]) + parseInt(values[1]);
	}

}

export default Calculator;

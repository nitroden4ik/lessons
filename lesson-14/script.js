function sumInput() {
	let numbers = [];

	while (true) {
		let input = prompt('Введите число:', '');

		if (input === null || input === '' || !isFinite(input)) {
			break;
		}

		numbers.push(Number(input));
	}

	let sum = 0;
	for (let number of numbers) {
		sum += number;
	}

	alert(sum);
}
sumInput();
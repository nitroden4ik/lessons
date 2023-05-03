let month = parseInt(prompt('Введите номер месяца (1-12)'));
if((!isNaN(month)) && month >=1 && month <= 12) {
	let season = month >=3 && month <=5 ? 'весна':
    			   month >=6 && month <=8 ? 'лето':
    			   month >=9 && month <=11 ? 'осень': 'зима';
alert(`Сезон ${month}-го месяца - ${season}.`)} else alert('Введите номер от 1-12!');


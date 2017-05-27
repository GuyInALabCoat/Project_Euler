// Project Euler: Sum of all multiples of three or five under 1000

var sum = 0;

function multipleThreeOrFive(number) {
	return ((number % 5) === 0) || ((number % 3) === 0);
}

for (var i = 0; i < 1000; i++){
	
	if (multipleThreeOrFive(i)){
		sum = sum + i;	
	}
}

console.log("Sum of multiples below 1000: " + sum);

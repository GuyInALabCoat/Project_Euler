// Project Euler: Problem 2 sum of even-valued Fibonacci terms not exceeding four million

var prev = 1;
var curr = 2;
var sum = 0;

// will generate the next number in the fibonacci sequence with each call
function Fibonacci() {
	var temp = curr;
	curr = prev + curr;
	prev = temp;
}

function even(number){
	return (number % 2) === 0;
}

while(curr < 4000000){
	
	if (even(curr)){
		sum = sum + curr;
	}
	Fibonacci();
}

console.log("Sum of even Fibonacci numbers less than 100: " + sum);

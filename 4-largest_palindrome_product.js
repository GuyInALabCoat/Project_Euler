// Project Euler: Problem 4 - Find the largest palindrome made from the product of two 3-digit numbers.

function findLargestPalindrome(max_1, max_2){
	
	var product = 0;
	var largestPalindrome = 0;

	for (var num_1 = 1; num_1 < max_1; num_1++){
		
		for (var num_2 = 1; num_2 < max_2; num_2++){
		
			product = (num_1 * num_2);

			if (isPalindrome(product) && product > largestPalindrome) {
				largestPalindrome = product;	
			}	
		}
	}

	return largestPalindrome;
}

function isPalindrome(number){
	
	var digitString = number.toString();
	var ispalin = true;

	var start = 0;
	var end = digitString.length - 1;

	while(start < end){
		
		if(digitString[start] !== digitString[end]){
			ispalin = false;
			break;
		}

		start++;
		end--;
	}

	return ispalin;
}

console.log("Largest palindrome of two three digit numbers is: " + findLargestPalindrome(1000, 1000));

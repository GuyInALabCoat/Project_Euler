# Project Euler: Problem 2 - sum of even-valued Fibonacci terms not exceeding four million

$previous = 1
$current = 2
$sum = 0

def fibonacci 
	temporary = $current
	$current = $previous + $current
	$previous = temporary
end

def even? number
	return ((number % 2) == 0)
end

while $current < 4000000 do
	
	if even? $current
		$sum = $sum + $current
	end

	fibonacci
end

puts "Sum of even fibonacci numbers less than 4 million: #{$sum}"

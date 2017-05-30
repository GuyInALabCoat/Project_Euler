#Project Euler: Problem 1 - Find the sum of all the multiples of 3 or 5 below 1000

def is_multiple_three_or_five? number
	return ((number % 3) == 0) || ((number % 5) == 0)
end

sum = 0

for i in 1..1000 do
	
	if is_multiple_three_or_five? i
		sum = sum + i
	end
end

puts "Sum of multiples below 1000: #{sum}"

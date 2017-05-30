# Project Euler : Problem 3 - find the largest prime factor of the number 600851475143

$number = 600851475143

def largest_prime_factor number
	
	@i = 2

	while @i < $number

		if (($number % @i) == 0)
			$number = ($number / @i)
			@i -= 1
		end

		@i += 1
	end

	return @i
end

puts "The largest prime factor of #{$number} is: #{largest_prime_factor $number}"	

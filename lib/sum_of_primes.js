'use strict'

module.exports = {
  sumOfPrimes: function(num) {
  	var arrayPrime = [];
	var totalArray = 0;
	
	for (var numbers = 1; numbers <= num; numbers++)
	//Creates a variable called not_prime and automatically sets it to false for each of the counter numbers 
	{
	    var isPrime = true;
	//Creates a for loop with a variable called div. The loop increases by one each time until it gets to one less than the counter.
	    for (var divisor = 2; divisor <= (numbers - 1); divisor++) 
	//If the current number divided by the "div"ider number has a remainder of 0, then it's not a prime number and not_prime is set to true.    
	    {
	        if (numbers % divisor == 0) 
	        {
			isPrime = false;
			}
	    }

	//If after going through all the numbers between 2 and one less than the number and none of them were evenly divided (no remainder) not_prime will still be false and the console will print the number.
	    if (isPrime == true) 
	    {
		arrayPrime.push(numbers);
		}
	}
	for(var i = 0; i<arrayPrime.length;i++){
		totalArray += arrayPrime[i];
	  
	}
    
  }
  
}
'use strict'

module.exports = {
  sumOfPrimes: function(num) {
  	var arrayPrime = [];
	var totalArray = 0;
	
	for (var numbers = 2; numbers <= num; numbers++)
	{
	    var isPrime = true; //Using flags, variable isPrime is assigned true

	    for (var divisor = 2; divisor <= (numbers - 1); divisor++) 
	//If the current number divided by the "divisor" number has a remainder of 0, then it's not a prime number and isPrime is set to false.    
	    {
	        if (numbers % divisor == 0) 
	        {
			isPrime = false;
			}
	    }

	//If after going through all the numbers between 2 and one less than the number and none of them were evenly divided (no remainder) isPrime will still be true.
	    if (isPrime) 
	    {
		arrayPrime.push(numbers);
		}
	}
	for(var i = 0; i<arrayPrime.length;i++){
		totalArray += arrayPrime[i];
	  
	}

	return totalArray;
    
  }
  
}
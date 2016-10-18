'use strict'

module.exports = {
  sumOfPrimes: function(num) {
  	var arrayPrime = [];
	var totalArray = 0;
	if(num<0){
		return 'Cannot Calculate sum of prime for negative numbers.';
	}else if(num == undefined){

		return 'Invalid Input';

	}else if (typeof num == 'string' ){

		return 'Invalid Input';

	}else if(num == num/1){

	for (var numbers = 2; numbers <= num; numbers++)
	{
	    var isPrime = true; //Using flags, variable isPrime is assigned true

	    for (var divisor = 2; divisor <= (numbers - 1); divisor++) {
	        if (numbers % divisor == 0) 
	        { // checks if a number is divisible by any other number apart from 1 and itself.
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
}
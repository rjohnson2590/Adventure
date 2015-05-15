
// var fibonacci = function(n) {
//   if (n > 1) {
//     return fibonacci(n - 1) + fibonacci(n - 2)
//   }  else {
//     return 1;
//   }
// };
// var knownFibonacciNumbers={};
// var fibonacci = function(n) {
// 	if(knownFibonacciNumbers[n]=== undefined){
//   	knownFibonacciNumbers[n] = n > 1 ? fibonacci(n - 1) + fibonacci(n - 2) : 1;
// }
// 	return knownFibonacciNumbers[n];
// };
// console.log(fibonacci(Number(process.argv[2])));

// var Fibonacci = function(n){
// 	return n > 1 ? Fibonacci(n-1)+ Fibonacci(n-2) :1;
// }

// function memoize(f){
// 	var knownValues={};
// 	return function(n){
// 		if(knownValues[n]=== undefined){
// 			knownValues[n]= f(n);
// 		}
// 		return knownValues[n];
// 	}
// }
// var Fibonacci= memoize(Fibonacci);

// console.log(Fibonacci(Number(process.argv[2])));

// var once = function(callBack) {
//     var executed = false;
//     return function () {
//         if (!executed) {
//  			callBack();
//             executed = true;
//         }
//     };
// }

// var findTrueLove = once (function(){
// 	console.log("Looking for true love...")
// });



// findTrueLove()
// findTrueLove()




// var numbers = [1, 2, 3, 4, 5, 6];
// var newNumbers=[]
// var filter = function(array, callBack, ray){
// 	array.forEach(function(n){
// 		if(callBack(n)===true){
// 		ray.push(n)
// 			}
// 	})
// 	return ray
// }
// var evenNumbers = filter(numbers, function(n) { return (n % 2) === 0; },newNumbers);


// console.log(evenNumbers)

// var pairs = [['name', 'JSI'], ['location', { city: 'Portland', 'state': 'OR' }], ['school', 'PCS']];

// function reduce(array, callBack, start) {
//   var current = start;
//   for (var i = 0; i < array.length; i++)
//     current = callBack(current, array[i]);
//   return current;
// }

// console.log(reduce(pairs,function(accum,curr){
// 	var key= curr[0];
// 	var value= curr[1];
// 	accum[key]=value	 
// 	return accum
// },{}))






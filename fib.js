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















// function counter(num) {
// 	var count=num;
// 	var obj={
// 	next :function (){
// 		count += 1;
// 		console.log(count)
// 		// return count		
// 	},
// 	reset:function(num){
// 		count=num;
// 		// count += 1;
// 		if (count===undefined){
// 			count=0;
// 		}
// 		console.log(count)
// 		// return count;
// 	} 
// }
// 	return obj;
// }

// var sequence1 = counter(5);
// var sequence2 = counter(4);


// sequence1.next()
// sequence2.next()
// sequence1.next()
// sequence2.next()
// sequence2.next()
// sequence2.next()
// sequence1.reset(20)
// sequence1.next();

// var a = 1;
// function b() {
//   a = 10;
//   return;
//   function a() {}
// }
// b();
// console.log(b());
function freezeI(i) {
	return function() {
    console.log(array[i]);
  }
}

var array = ["hello", "world"];
var callbacks = [];
for (var i = 0; i < array.length; i++) {
  callbacks.push(freezeI(i));
}
callbacks.forEach(function(c) { c(); });

// function test() { 
// 	foo(); // TypeError "foo is not a function"
// 	bar(); // "this will run!"
// 	var foo = function () { // function expression assigned to local variable 'foo'
// 		console.log("this won't run!");
// 	}
// 	function bar() { // function declaration, given the name 'bar'
// 		console.log("this will run!");
// 	}
// }
// test()
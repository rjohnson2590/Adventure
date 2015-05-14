// var count=0;


// function sequence() {
// 	count += 1;
// 	return count;
// }

// console.log(sequence())
// console.log(sequence())
// console.log(sequence())
// console.log(sequence())



function counter(num) {
	var count=num;
	function run(){
		count += 1;
		console.log(count)
		return count		
	}

	return run;
}

var sequence1 = counter(5);
var sequence2 = counter(4);


sequence1()
sequence2()
sequence1()
sequence2()
sequence2()
sequence2()
sequence1()














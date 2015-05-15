// var array= [1,2,3,4,5]
// var newArray=[]

// function squareAll(element,ray){
// 	return ray.push(element*element)
// }



// array.forEach(function(x){
// 	squareAll(x,newArray)
// })

// console.log(newArray)

var _=require("lodash")


var array=[1,[2,3,[4]]];
// var newArray=[];
// var value;
// var value1;

// function flat(ray){
// 	value=ray.pop();
// 	value1=ray.shift();
// 	value.unshift(value1)
// 	return value
// }

// var flat= function(array,isDeep,start){
// 	var output=[], idx=0;
// 	for(var i= 0; i < array.length; i++){
// 		value = array[i];
// 		if(!isDeep){ value=flat(value,isDeep)
// 		var j=0, len= value.length;
// 		output.length +=len;
// 		while(j<len){
// 			console.log("hello")
// 			output[idx++]=value[j++]
// 		}
// 	}	else{
// 		output[idx++]=value;

// 	}
// }
// 	return output;
// }


//instance off

// console.log(flat(array,false))







console.log(_.flatten(array))














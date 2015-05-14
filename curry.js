var array= [1,2,3,4,5]
var newArray=[]

function squareAll(element,ray){
	return ray.push(element*element)
}



array.forEach(function(x){
	squareAll(x,newArray)
})

console.log(newArray)
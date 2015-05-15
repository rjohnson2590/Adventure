


var flat= function(array,isDeep,start){
	var output=[], idx=0;
	for(var i= 0; i < array.length; i++){
		value = array[i];
		if(!isDeep){ value=flat(value,isDeep)
		var j=0, len= value;
		output.length +=len;
		while(j<len){
			console.log("hello")
			output[idx++]=value[j++]
		}
	}	else{
		output[idx++]=value;

	}
}
	return output;
}
var array=[1,[2,3,[4]]];

console.log(flat(array,true))
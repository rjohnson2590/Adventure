console.log(require('./node_modules/jsi-gamelib').map(require(process.argv[2])));

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var contents = require("./game.json") 

var start=contents["rooms"][0].name;

var roomIndex= {A:0, B:1, C:2, D:3, E:4, F:5, G:6, H:7, I:8, J:9, K:10}


function name1(letter){
	return roomIndex[letter];
}

function room(index){
	return contents["rooms"][index].name;
}

function movement(index, direction){
	return contents["rooms"][index][direction];
}

function description(index){
	return contents["rooms"][index].description;
}




function game(A){
	rl.question(description(name1(A)),function(choice){
		if(choice==="east"){
			var dir='';
			var other="";
			dir = movement(name1(A),choice);
			other=name1(dir)
			rl.question(description(other),function(){
				game(dir)
			});
		}else if(choice==="north"){
			var dir='';
			var other="";
			dir = movement(name1(A),choice);
			other=name1(dir)
			rl.question(description(other),function(){
				game(dir)
			});
		}else if(choice==="south"){
			var dir='';
			var other="";
			dir = movement(name1(A),choice);
			other=name1(dir)
			rl.question(description(other),function(){
				game(dir)
			});
		}else if(choice==="west"){
			var dir='';
			var other="";
			dir = movement(name1(A),choice);
			other=name1(dir)
			rl.question(description(other),function(){
				game(dir)
			});

		}

	})
}

game("A");




// console.log(movement(0, "north"))


// function game(){

// rl.question(, function (choice){
// 				var area="";
// 				var index="";
// 				if(choice==="north" || choice==="east"){
// 					index=0;
// 				}
// 				area=movement(index, choice); 
// 				if(area==="D"){
// 				console.log("Good you have reached a new room")
// 				storyLine(area);
// 				}else if(area==="B"){
// 					console.log("Good you have reached a new room")
// 				storyLine(area);
// 				}

// 		});
			
// }

// game();

// function storyLine(letter){
// 	if(letter==="D"){
// 		rl.question("Welcome to a new room, in this room there is nothing of importance continue on",function(choice){
// 				var area="";
// 				var index="";
// 				if(choice==="north" || choice==="south"){
// 					index=3;
// 				}
// 				area=movement(index, choice); 
// 				if(area==="G"){
// 				console.log("Good you have reached a new room")
// 				storyLine(area);
// 				}else if(area==="A"){
// 					console.log("Good you have reached a new room")
// 				game();
// 				}

// 		});

// 	}else if(letter==="E"){
// 		rl.question("Welcome to a new room, in this room there is nothing of importance continue on",function(choice){
// 				var area="";
// 				var index="";
// 				if(choice==="east" || choice==="south"){
// 					index=4;
// 				}
// 				area=movement(index, choice); 
// 				if(area==="F"){
// 				console.log("Good you have reached a new room")
// 				// storyLine(area);
// 				}else if(area==="B"){
// 					console.log("Good you have reached a new room")
// 				rl.close();
// 				}

// 		});

// 	}

// }



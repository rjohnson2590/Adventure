console.log(require('./node_modules/jsi-gamelib').map(require(process.argv[2])));

var contents = require("./game.json") 
var components = require("./node_modules/jsi-gamelib/lib/components.js");
var readline = require('readline');
var draw= require('jsi-gamelib').map;
var newMap= require('jsi-gamelib').map.drawMap;
var drawing=require("./node_modules/jsi-gamelib/lib/map.js")

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var start=contents["rooms"][0].name;

var roomIndex= {A:0, B:1, C:2, D:3, E:4, F:5, G:6, H:7, I:8, J:9, K:10}

var doodle= draw(contents);

// var visited=[0,3]

// var Tom= visited.forEach(function(number){contents.rooms[number].map = components.createRoom(contents.rooms[number])})

var house={rooms:[contents["rooms"][0]]}
// house.rooms.push()
// function work(array){
// 	array.forEach(function(element,index){
// 	console.log(contents["rooms"][element].drawing)
// })
// }

// function camel(){for(var i=0; i<visited.length;i++){
// 	console.log((contents["rooms"][visited[i]].map))
// }}



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

function booty(index){
	return contents["rooms"][index].treasure;
}

function gameMap(A){
	console.log(contents.rooms[name1(A)].drawing)
	// console.log(contents.rooms[name1(B)].drawing);
}

// console.log(actualVisted.drawing)

function game(A){
	console.log(drawing(house));
	rl.question(description(name1(A)),function(choice){
		if(choice==="east"){
			var dir='';
			var other="";
			dir = movement(name1(A),choice);
			if(dir!==null){	
			other=name1(dir)
			house.rooms.push(contents["rooms"][other])
			// console.log(actualVisted.drawing)
			game(room(other))
			if(booty(other)=== true){
				console.log("You found the treasure and won the game!!!")
				rl.close();
			}
			;}
			else{console.log("That is not a valid way to go, I am teleporting you back to the start");
				game("A")			}
		}else if(choice==="north"){
			var dir='';
			var other="";
			dir = movement(name1(A),choice); 
			if(dir!==null){	
			other=name1(dir)
			house.rooms.push(contents["rooms"][other])
			// console.log(actualVisted.drawing)
			game(room(other));}
			else{console.log("That is not a valid way to go, I am teleporting you back to the start");
				game("A")			}
		}else if(choice==="south"){
			var dir='';
			var other="";
			dir = movement(name1(A),choice);
			if(dir!==null){	
			other=name1(dir)
			house.rooms.push(contents["rooms"][other])
			// console.log(actualVisted.drawing)
			game(room(other));}
			else{console.log("That is not a valid way to go, I am teleporting you back to the start");
				game("A")			}
		}else if(choice==="west"){
			var dir='';
			var other="";
			dir = movement(name1(A),choice);
			if(dir!==null){	
			other=name1(dir)
			house.rooms.push(contents["rooms"][other])
			// console.log(actualVisted.drawing)
			// console.log(contents.rooms[other].drawing)
			game(room(other));}
			else{console.log("That is not a valid way to go, I am teleporting you back to the start");
				game("A")			}

		}

	})
}

// console.log(gameMap("A","D"));

game("A");

// ~/Adventure/node_modules/jsi-gamelib/lib

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



console.log(require('./node_modules/jsi-gamelib').map(require(process.argv[2])));

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function game(){

rl.question("Hello welcome to the castle. I am your guide for this adventure. I have brought you here to naviagate my maze in the castle to receive treasure, this is simply for my perverse pleasure. Please choose a direction to follow, up for up, down for down, left for left, and right for right. Currently there are doors up and to the right make your choice: ",function (choice){ 
		if(choice === "up"){
			console.log("Good choice you have moved into another room")
			game1_up_D();
		}else if(choice==="right"){
			console.log("Good choice you have moved into another room")
			game1_right_B();
		};
});
}


function game1_up_D(){
	rl.question("This room is entirly black except for a small dim light up ahead of you. It would be wise to move forward(up). Choose :",function(choice){
		if(choice === "up"){
			console.log("Good choice you have moved into another room")
			game2_up_G();
		}		
	});
}



function game1_right_B(){
	rl.question("In this room there is a dragon. You can go up or right or go left to go back to the start. Choose :",function(choice){
		if(choice === "up"){
			console.log("Good choice you have moved into another room")
			game2_up_E();
		
		}else if(choice==="right"){
			console.log("Good choice you have moved into another room")
			game2_right_C();
		}else if(choice==="left"){
			console.log("Good choice you have moved into another room")
			game();
		}

		
		
	});
}

function game2_up_E(){
	rl.question("In this room you see a narrow path way that leads to the right, you must crawl through to reach the next room(right). Choose: ", function(choice){
		if(choice === "right"){
			console.log("Good choice you have moved into another room")
			game3_right_F();

		}
	})
}

function game2_right_C(){
	rl.question("In this room there is a fountain that spews forth blood, it disturbs you greatly. You can only turn around back to the dragon at this point(left). Choose :",function(choice){
		if(choice === "left"){
			console.log("Good choice you have moved into another room")
			game1_right_B();
		}
		
		
	});
}

function game2_up_G(){
	rl.question("This room has nothing in it but white stone walls, yet you can hear the soft whispering of wind and your bones feel a chill that runs dep with in them, it would be best to move forward and there is but one door that lays forward(up). Choose :",function(choice){
		if(choice === "up"){
			console.log("Good choice you have moved into another room")
			game3_up_H();
		}
		
		
	});
}

function game3_right_F(){
	rl.question("There is no way out you must turn around and go back out to the left, you crawl through the tunnel and head back to the previous room and then back to the room prior to that(left). Choose: ", function(choice){
		console.log("Good choice you have moved into another room")
		game1_right_B();
	})
}

function game3_up_H(){
	rl.question("As you enter this room a shade beckons you forward, captived by it's spell you follow the shade to the next room to the right. But before enterng the next room the shade forces you to make the decsion to open the door(right). Choose: ", function(choice){
		if(choice === "right"){
			console.log("Good choice you have moved into another room")
			game4_right_I();
		}
	});


}

function game4_right_I(){
	rl.question("Upon entering this room you immediatly feel a sensation of utter joy, but deep down you know this feeling to come from the room and not truly yourself. As an enlightened individual you decide to leave and head toward the only other door out(right). Choose: ", function(choice){
		if(choice === "right"){
			console.log("Good choice you have moved into another room")
			game5_right_J();
		}
	})
}

function game5_right_J(){
	rl.question("You are quite close to the treasure, you can feel it's magic urging you to move to another room, sadly this room as but two ledges, one behind you and one across a large pool of water that leads to the final room. Sadly you never learned to swim, but fortuantly you have a wooden sheild that you can float across on(right). Choose: ", function(choice){
		if(choice === "right"){
			console.log("Good choice you have moved into another room")
			game5_right_K();
		}
	})
}

function game5_right_K(){
	console.log("You have arrived and found the treasure!!! Upon touching the trease you are instantly transported back to your home with all the riches you could ever dream of. You win! GAME OVER")
			rl.close();
		
	
}
game();




























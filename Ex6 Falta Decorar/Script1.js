
var images_array = ['IMAGES/1.jpg','./IMAGES/1.jpg','./IMAGES/2.jpg','./IMAGES/2.jpg','./IMAGES/3.jpg','./IMAGES/3.jpg','./IMAGES/4.jpg','./IMAGES/4.jpg','./IMAGES/5.jpg','./IMAGES/5.jpg','./IMAGES/6.jpg','./IMAGES/6.jpg','IMAGES/7.jpg','IMAGES/7.jpg','IMAGES/8.jpg','IMAGES/8.jpg','IMAGES/9.png','IMAGES/9.png','IMAGES/10.jpg','IMAGES/10.jpg'];
//Array for pushing in only two images to see if they are the same
var flipped_array = [];
var memory_images = [];
//Number that can only go up to 2 and represents the actual images flipped on board
var imagesFlipped = 0;
var winner = 0;
//patterns to check the user inputs are in the right format
var pattern1 = /[A-z]/;
var pattern2 = /[0-9]/;
var timeoutCounter; //variable for the seconds left in the game
var x;
//variables used in the countdown() method and for the final alert if the user wins
var minutes;
var seconds;

$(document).ready(function(){
	$("#start").click(function(){
		startGame();
		$(".front").click(function(ui){
			//If there are 2 images flipped and they are not the same
			if(imagesFlipped == 2 && flipped_array[0] != flipped_array[1]){
				$("#"+memory_images[0]).css("transform", "rotateY(0)");
				$("#"+memory_images[1]).css("transform", "rotateY(0)");
				memory_images = [];
				flipped_array = [];
				imagesFlipped = 0;
			}
			//If the two images flipped are the same
			else if(imagesFlipped == 2 && flipped_array[0] == flipped_array[1]){
				memory_images = [];
				flipped_array = [];
				imagesFlipped = 0;
			}
			$("#"+ui.currentTarget.parentElement.id).css("transform", "rotateY(180deg)");
			checkValidity(ui.currentTarget.parentElement.id, ui.currentTarget.parentElement.childNodes[1].firstElementChild.src);
		});
	});
});

function checkValidity(id, src){
	imagesFlipped++;
	//Pushes into the array the image of the flipped panel, 1st box flipped
	if(memory_images.length < 2 && flipped_array < 2 && imagesFlipped == 1){
		memory_images.push(id);
		flipped_array.push(src);
	}
	//Pushes 2nd box flipped into the array the image of the flipped panel
	else if(imagesFlipped == 2){
		memory_images.push(id);
		flipped_array.push(src);
		//Checks both src of the boxes
		if(flipped_array[0] == flipped_array[1]){
			//If they are the same, you cannot flip them anymore
			//increase the winner variable by 1
			winner++;
			//call the method to display the user's current score
			counterScore();
			//check if the user has won the game
			if(winner == document.getElementById("inputImages").value && imagesFlipped == 2){
				//display it with an alert
				alert("WINNER\nCongratulations!!\nTime spent:\n" + (document.getElementById("inputSeconds").value - ((minutes*60) + seconds)) + " seconds");
				clearTimeout(x);
			}
		}
		//Else empty the arrays and rotate back the panels
		else{
			$("#"+memory_images[1]).css("transform","rotateY(180)");
		}
	}
}

//Durstenfeld Shuffle
function randomBoxes(array){
  var y1 = document.getElementById("inputImages").value; //number of input images
  var y2 = document.getElementById("inputSeconds").value; //number of seconds
  var y3 = y1*2; //number of boxes
  var j;
  var aux;

  for(var i= 0; i < y3; i++){
    j = Math.floor(Math.random()*(y3-i-1));
    aux = array[j];
    array[j] = array[i];
    array[i] = aux;
  }
  return array;
}
	//function to set up the timer
	function countDown(){
		//get the input seconds given by the user
		var timeInSeconds = document.getElementById("inputSeconds").value;
		//get current time
		var currentTime = Date.parse(new Date());
		//calculate the deadline
		var deadline = new Date(currentTime + (timeInSeconds*1000));
		document.getElementById("timer").style.display= "block";
		  // Update the count down every 1 second
		  x = setInterval(function() {
		  // Get todays date and time
		  var now = new Date().getTime();
		  // Find the distance between now an the count down date
		  var distance = deadline - now;
			//if the user enters a timer with more than 60 seconds, we calculate the numer of minutes it has
		  if(timeInSeconds > 60){
		  minutes = Math.floor(((distance/60) % (1000*60)) / 1000);
		  seconds = (Math.floor((distance % (1000 * 60)) / 1000)) - Math.floor(((minutes*60) % (1000*60)) / 1000);
		  }
			//if the value is lower than 60 seconds we just care about the seconds
		  else{
		    minutes = 0;
		    seconds = Math.floor((distance % (1000 * 60)) / 1000);
		  }
		//We display the timer on the "timer" box
		document.getElementById("timer").innerHTML = minutes + " minute : " + seconds + " seconds left ";

		  // If the count down is over, end the game
		  if (distance < 0) {
		      alert("       GAME OVER\n Better luck next time!");
		      clearTimeout(x);
		      document.getElementById("timer").innerHTML = "The time has expired";
		      return false;
		  }
		}, 1000);
	}

//Function to set up the board and the whole game
function startGame(){

  var y1 = document.getElementById("inputImages").value; //number of input images
  var y2 = document.getElementById("inputSeconds").value; //number of seconds
  var y3 = y1*2; //number of boxes

	//We need to make sure the inputs are introduced correctly
  if( y1.match(pattern1) || y1 < 3 || y1 > 10){
	alert("Input images must be a number between 3 and 10");
	return false;
  }

  if( y2.match(pattern1) || y2 < 10 || y2 > 120){
	alert("Input seconds must be a number between 10 and 120");
	return false;
  }

	//Toggle the boxes to make sure the game is always random
  randomBoxes(images_array);
  var display = "";
	for(var i = 0; i< y3; i++){
		//Create the necessary images to play with
		display += '<div id="panel_'+i+'"><div class="front face"><img class="img" id="image_'+i+'" src="./IMAGES/mystery.jpg"></div><div id="backimage_'+i+'" class="back face center"><img class="img" src="'+images_array[i]+'"></div></div>';
	}
	document.getElementById("board").innerHTML = display;
	//Set widths and margins for all possible scenarios to be less painful to see
	for(var i = 0; i< y3; i++){
			//Depending on the number of boxes we have on the board, we will asign different CSS attributes to make sure it has an optimal display
			if(y1 == 3){
				//add left margin
				if(i == 0 || i == 3){
					$("#panel_"+i).css({"width": "200px","height": "200px" ,"margin": "10px" , "margin-left": "10%" , "float": "left","transform-style": "preserve-3d","transition":"all 0.5s"});
				}
				else{
					$("#panel_"+i).css({"width": "200px","height": "200px" ,"margin": "10px" , "float": "left","transform-style": "preserve-3d","transition":"all 0.5s"});
					$(".img").css({"width":"200px","height":"200px"});
					$(".face").css({"width":"200px","height":"200px"});
				}
			}
			else if(y1 == 4){
				//add left margin
				if(i == 0 || i == 4){
					$("#panel_"+i).css({"width": "180px","height": "180px","margin": "10px" ,"margin-left":"9%", "float": "left","transform-style": "preserve-3d","transition":"all 0.5s"});
				}
				else{
					$("#panel_"+i).css({"width": "180px","height": "180px","margin": "10px" , "float": "left","transform-style": "preserve-3d","transition":"all 0.5s"});
					$(".img").css({"width":"180px","height":"180px"});
					$(".face").css({"width":"180px","height":"180px"});
				}
			}
			else if(y1 == 5){
				//add left margin
				if(i == 0 || i == 5){
					$("#panel_"+i).css({"width": "150px","height": "150px","margin": "10px" , "margin-left":"6%", "float": "left","transform-style": "preserve-3d","transition":"all 0.5s"});
				}
				else{
					$("#panel_"+i).css({"width": "150px","height": "150px","margin": "10px" , "float": "left","transform-style": "preserve-3d","transition":"all 0.5s"});
					$(".img").css({"width":"150px","height":"150px"});
					$(".face").css({"width":"150px","height":"150px"});
				}
			}
			else if(y1 == 6){
				//add left margin
				if(i == 0 || i == 4 || i == 8){
					$("#panel_"+i).css({"width": "200px","height": "200px", "margin": "10px" , "margin-left": "5%", "float": "left","transform-style": "preserve-3d","transition":"all 0.5s"});
				}
				else{
					$("#panel_"+i).css({"width": "200px","height": "200px","margin": "10px" , "float": "left","transform-style": "preserve-3d","transition":"all 0.5s"});
					$(".img").css({"width":"200px","height":"200px"});
					$(".face").css({"width":"200px","height":"200px"});
				}
			}
			else if(y1 == 7){
				//add left margin
				if(i == 0 || i == 5 || i == 10){
					$("#panel_"+i).css({"width": "150px","height": "150px","margin": "10px" , "margin-left": "6%", "float": "left","transform-style": "preserve-3d","transition":"all 0.5s"});
				}
			  else{
					$("#panel_"+i).css({"width": "150px","height": "150px","margin": "10px" , "float": "left","transform-style": "preserve-3d","transition":"all 0.5s"});
					$(".img").css({"width":"150px","height":"150px"});
					$(".face").css({"width":"150px","height":"150px"});
			  }
			}
			else if(y1 == 8){
				//add left margin
				if(i == 0 || i == 4 || i == 8 || i == 12){
					$("#panel_"+i).css({"width": "175px","height": "175px","margin": "10px" , "margin-left": "10%", "float": "left","transform-style": "preserve-3d","transition":"all 0.5s"});
				}
			  else{
				$("#panel_"+i).css({"width": "175px","height": "175px","margin": "10px" , "float": "left","transform-style": "preserve-3d","transition":"all 0.5s"});
				$(".img").css({"width":"175px","height":"175px"});
				$(".face").css({"width":"175px","height":"175px"});
			  }
		  }
			else if(y1 == 9){
				//add left margin
				if(i == 0 || i == 6 || i == 12){
					$("#panel_"+i).css({"width": "120px","height": "120px","margin": "10px" , "margin-left": "7%", "float": "left","transform-style": "preserve-3d","transition":"all 0.5s"});
				}
				else{
				$("#panel_"+i).css({"width": "120px","height": "120px","margin": "10px" , "float": "left","transform-style": "preserve-3d","transition":"all 0.5s"});
				$(".img").css({"width":"120px","height":"120px"});
				$(".face").css({"width":"120px","height":"120px"});
			  }
			}
			else {
				//add left margin
				if(i == 0 || i == 5 || i == 10 || i == 15){
					$("#panel_"+i).css({"width": "150px","height": "150px","margin": "10px" , "margin-left": "6%", "float": "left","transform-style": "preserve-3d","transition":"all 0.5s"});
				}
				else{
				$("#panel_"+i).css({"width": "150px","height": "150px","margin": "10px" , "float": "left","transform-style": "preserve-3d","transition":"all 0.5s"});
				$(".img").css({"width":"150px","height":"150px"});
				$(".face").css({"width":"150px","height":"150px"});
				}
		  }
		//Set cursor when hovering on panels
		$("#panel_"+i).hover(function(){
			$(this).css("cursor","pointer");
		});
	}
}

//Function to hide the "Play" button and make sure the user cannot change the input fields when the game restarts
function hideButton(){
	document.getElementById("start").style.display = "none";
	document.getElementById("inputImages").readOnly = true;
	document.getElementById("inputSeconds").readOnly = true;
}

//Function to set up the restart of the game
function restart(){
	//the score resets
	winner = 0;
	//the timer stops
	clearTimeout(x);
	//set up the score again
	counterScore();
	winner = 0;
	//start the game again
	startGame();
	//start the countdown again
	countDown();
	$(".front").click(function(ui){
		//If there are 2 images flipped and they are not the same
		if(imagesFlipped == 2 && flipped_array[0] != flipped_array[1]){
			$("#"+memory_images[0]).css("transform", "rotateY(0)");
			$("#"+memory_images[1]).css("transform", "rotateY(0)");
			memory_images = [];
			flipped_array = [];
			imagesFlipped = 0;
		}
		//If the two images flipped are the same
		else if(imagesFlipped == 2 && flipped_array[0] == flipped_array[1]){
			memory_images = [];
			flipped_array = [];
			imagesFlipped = 0;
		}
		$("#"+ui.currentTarget.parentElement.id).css("transform", "rotateY(180deg)");
		checkValidity(ui.currentTarget.parentElement.id, ui.currentTarget.parentElement.childNodes[1].firstElementChild.src);
	});
}

//Function to add score to the counter and show it when the game starts
function counterScore(){
	document.getElementById("score").innerHTML = "Found pairs: " +winner;
	document.getElementById("score").style.display= "block";
}

//Function to set up the CSS display depending on  the number of boxes (height of the board)
function createBox(){

	var nImages = document.getElementById("inputImages").value;
	if(nImages == 3){
		document.getElementById("board").style.width = "800px";
	}
	if(nImages == 4){
		document.getElementById("board").style.height = "400px";
	}
	if(nImages == 5){
		document.getElementById("board").style.height = "350px";
	}
	if(nImages == 6){
		document.getElementById("board").style.height = "670px";
	}
	 if(nImages == 7){
		document.getElementById("board").style.height = "520px";
	}
	if(nImages == 8){
		document.getElementById("board").style.height = "790px";
	}
	if(nImages == 9){
		document.getElementById("board").style.height = "430px";
    }
	if(nImages == 10){
		document.getElementById("board").style.height = "690px";
    }

}

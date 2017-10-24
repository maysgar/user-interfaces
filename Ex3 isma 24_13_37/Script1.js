
var images_array = ['IMAGES/1.jpg','./IMAGES/1.jpg','./IMAGES/2.jpg','./IMAGES/2.jpg','./IMAGES/3.jpg','./IMAGES/3.jpg','./IMAGES/4.jpg','./IMAGES/4.jpg','./IMAGES/5.jpg','./IMAGES/5.jpg','./IMAGES/6.jpg','./IMAGES/6.jpg','IMAGES/7.jpg','IMAGES/7.jpg','IMAGES/8.jpg','IMAGES/8.jpg','IMAGES/9.png','IMAGES/9.png','IMAGES/10.jpg','IMAGES/10.jpg']; 
//Array for pushing in only two images to see if they are the same
var flipped_array = [];
var memory_images = [];
//Number that can only go up to 2 and represents the actual images flipped on board 
var imagesFlipped = 0;
var winner = 0;

var pattern0 = /[A-z,0-9]/;
var pattern1 = /[A-z]/;
var pattern2 = /[0-9]/;
var timeoutCounter; //variable for the seconds left in the game
var x;

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
			winner++;
			counterScore();
			if(winner == document.getElementById("inputImages").value && imagesFlipped == 2){
				alert("               WINNER\n        Congratulations!!\n Time spent:\n" + document.getElementById("timer").innerHTML);
			}
			//Añadir +1 contador
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

  // Set the date we're counting down to
  function countDown(){

    var timeInSeconds = document.getElementById("inputSeconds").value;
    var currentTime = Date.parse(new Date());
    var deadline = new Date(currentTime + timeInSeconds*1000);
	document.getElementById("timer").style.display= "block";
    // Update the count down every 1 second
    x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();
        // Find the distance between now an the count down date
        var distance = deadline - now;
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Output the result in an element with id="demo"
		if(distance >= 60000){
			document.getElementById("timer").innerHTML = " 1 minute : " + seconds + " seconds left ";
		}
		if(distance < 60000 && distance > 0){
			document.getElementById("timer").innerHTML = " 0 minute : " + seconds + " seconds left ";
		}
        // If the count down is over, end the game
        if (distance < 0) {
            alert("       GAME OVER\n \nBetter luck next time!");
            clearTimeout(x);
            document.getElementById("timer").innerHTML = "The time has expired";
            return false;
        }
      }, 1000);
   }


function startGame(){

  var y1 = document.getElementById("inputImages").value; //number of input images
  var y2 = document.getElementById("inputSeconds").value; //number of seconds
  var y3 = y1*2; //number of boxes

  if( y1.match(pattern1) || y1 < 3 || y1 > 10){
	alert("Input images must be a number between 3 and 10");
	return false;
  }

  if( y2.match(pattern1) || y2 < 10 || y2 > 120){
	alert("Input seconds must be a number between 10 and 120");
	return false;
  }

  randomBoxes(images_array);
  var display = "";
	for(var i = 0; i< y3; i++){
		//Create the necessary images to play with 
		display += '<div id="panel_'+i+'"><div class="front face"><img id="image_'+i+'" src="./IMAGES/meme.jpg"></div><div id="backimage_'+i+'" class="back face center"><img src="'+images_array[i]+'"></div></div>';
	}
	document.getElementById("board").innerHTML = display;
	for(var i = 0; i< y3; i++){
		//Set css properties for each different panel
		$("#panel_"+i).css({"width": "200px","height": "200px" ,"margin": "10px" ,"float": "left","transform-style": "preserve-3d","transition":"all 0.5s"});
		//Set cursor when hovering on panels
		$("#panel_"+i).hover(function(){
			$(this).css("cursor","pointer");
		});
	}
}

function restart(){
	winner = 0;
	clearTimeout(x);
	counterScore();
	startGame();
	countDown();
}

function counterScore(){
	document.getElementById("score").innerHTML = "Found pairs: " +winner;
	document.getElementById("score").style.display= "block";
}

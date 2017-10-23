
var mem_boxes = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J'];
var mem_values = [];
var mem_title = [];
var mem_fliped = 0;

var pattern0 = /[A-z,0-9]/;
var pattern1 = /[A-z]/;
var pattern2 = /[0-9]/;
var timeoutCounter; //variable for the seconds left in the game

function randomBoxes(){

  var y1 = document.getElementById("inputImages").value; //number of input images
  var y2 = document.getElementById("inputSeconds").value; //number of seconds
  var y3 = y1*2; //number of boxes
  var j;
  var aux;

  for(var i= 0; i < y3; i++){
    j = Math.floor(Math.random()*(y3-i-1));
    aux = mem_boxes[j];
    mem_boxes[j] = mem_boxes[i];
    mem_boxes[i] = aux;
  }
}

function flipImage(box, content){
  if(box.innerHTML == "" && mem_values.length < 2){
    box.style.background == "#FFF";
    box.innerHTML= "content";



  }
}

  // Set the date we're counting down to
  function countDown(){

    var timeInSeconds = document.getElementById("inputSeconds").value;
    var currentTime = Date.parse(new Date());
    var deadline = new Date(currentTime + timeInSeconds*1000);
    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();
        // Find the distance between now an the count down date
        var distance = deadline - now;
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Output the result in an element with id="demo"
		if(distance >= 60000){
			console.log(distance);
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

  mem_fliped = 0;
  var output = '';
  randomBoxes();
  for( var i = 0; i < y3; i++){
    output += '<div id="box_'+i+'" onclick="flipImage(this, \''+mem_boxes[i]+'\')" ></div>';
  }
  document.getElementById("board").innerHTML = output;
}

function restart(){
	//randomBoxes(); //toggle the boxes
	countdown(); //start the countdown again
	//restart_counter(); //score to 0 
	
	
}

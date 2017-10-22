
var images_array = ['./IMAGES/1.jpg','./IMAGES/1.jpg','./IMAGES/2.jpg','./IMAGES/2.jpg','./IMAGES/3.jpg','./IMAGES/3.jpg','./IMAGES/4.jpg','./IMAGES/4.jpg','./IMAGES/5.jpg','./IMAGES/5.jpg','./IMAGES/6.jpg','./IMAGES/6.jpg']; 

//Array for pushing in only two images to see if they are the same
var flipped_array = ['0','0'];
//Number that can only go up to 2 and represents the actual images flipped on board 
var imagesFlipped = 0;

$(document).ready(function(){
	$(".front").click(function(ui){
		$("#"+ui.currentTarget.parentElement.id).css("transform", "rotateY(180deg)");
		imagesFlipped++;
		//Pushes into the array the image of the flipped panel 
		flipped_array.push(ui.currentTarget.parentElement.childNodes[1].firstElementChild.src);
	});
});
$(document).ready(function(){
	$(".back").click(function(ui){
		//Passes the id panel to the function 
		//match(ui.currentTarget.parentElement.id);
		$("#"+ui.currentTarget.parentElement.id).css("transform", "rotateY(0deg)");
	});
});

function board(){
	//Randomizes boxes
	randomBoard(images_array);
	var display = "";
	for(var i = 0; i<images_array.length; i++){
		//Create the necessary images to play with 
		display += '<div id="panel_'+i+'"><div class="front face"><img id="image_'+i+'" src="./IMAGES/orange.jpg"></div><div id="backimage_'+i+'" class="back face center"><img src="'+images_array[i]+'"></div></div>';
	}
	document.getElementById("main-box").innerHTML = display;
	for(var i = 0; i<images_array.length; i++){
		//Set css properties for each different panel
		$("#panel_"+i).css({"width": "200px","height": "200px" ,"margin": "10px" ,"float": "left" ,"transform-style": "preserve-3d","transition": "all 0.5s"});
		//Set cursor when hovering on panels
		$("#panel_"+i).hover(function(){
			$(this).css("cursor","pointer");
		});
	}
}

//Durstenfeld Shuffle 
function randomBoard(array){
	for(var i = array.length -1; i>0; i--){
		var j = Math.floor(Math.random() * (i+1));
		var aux = array[i];
		array[i] = array[j];
		array[j] = aux;
	}
	return array;
}

function match(card){
	if(flipped_array[0] == flipped_array[1] && imagesFlipped == 2){
		flipped_array = [];
		//$("#"+card).css("transform","rotateY(0deg)");
	}	
	else{
		//$("#"+card).css("transform","rotateY(0deg)");
	}
}


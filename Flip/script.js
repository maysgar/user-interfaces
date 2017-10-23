
var images_array = ['IMAGES/1.jpg','./IMAGES/1.jpg','./IMAGES/2.jpg','./IMAGES/2.jpg','./IMAGES/3.jpg','./IMAGES/3.jpg','./IMAGES/4.jpg','./IMAGES/4.jpg','./IMAGES/5.jpg','./IMAGES/5.jpg','./IMAGES/6.jpg','./IMAGES/6.jpg']; 

//Array for pushing in only two images to see if they are the same
var flipped_array = [];
var memory_images = [];
//Number that can only go up to 2 and represents the actual images flipped on board 
var imagesFlipped = 0;
var winner = 0;

$(document).ready(function(){
	$(".front").click(function(ui){
		console.log("I am clicked "+ui.currentTarget.parentElement.id);
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
			winner++;
		}
		$("#"+ui.currentTarget.parentElement.id).css("transform", "rotateY(180deg)");
		checkValidity(ui.currentTarget.parentElement.id, ui.currentTarget.parentElement.childNodes[1].firstElementChild.src);
	});
});

function checkValidity(id, src){
	if(winner == ((images_array.length)/2)-1){
		alert("WINNER");
		return true;
	}
	imagesFlipped++;
	console.log(memory_images);
	console.log(flipped_array);
	//Pushes into the array the image of the flipped panel, 1st box flipped
	if(memory_images.length < 2 && flipped_array < 2 && imagesFlipped == 1){
		memory_images.push(id);
		flipped_array.push(src);
		console.log(memory_images);
		console.log(flipped_array);
	}
	//Pushes 2nd box flipped into the array the image of the flipped panel
	else if(imagesFlipped == 2){
		memory_images.push(id);
		flipped_array.push(src);
		console.log(memory_images);
		console.log(flipped_array);
		//Checks both src of the boxes
		if(flipped_array[0] == flipped_array[1]){
			//If they are the same, you cannot flip them anymore
			console.log("Match");
			//Añadir +1 contador
		}
		//Else empty the arrays and rotate back the panels
		else{
			console.log("Wrong");
			$("#"+memory_images[1]).css("transform","rotateY(180)");
		}	
	}
}

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
		$("#panel_"+i).css({"width": "200px","height": "200px" ,"margin": "10px" ,"float": "left"});
		$("#panel_"+i).addClass("transform");
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


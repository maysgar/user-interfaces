/*Function that swaps video, title, description of an element that is dropped in the iframe
	Explanation is done in the first case and is the same for the rest of them considering 
	all possible iterations between the videos. */
function swap(videoIframe, imageDrag, title, description){
	//List of all the iframe videos that can be swapped
	var PRO = "https://www.youtube.com/embed/4B-wFx0aMlw";
	var AUS = "https://www.youtube.com/embed/k_0UdJhl_rc";
	var DUM = "https://www.youtube.com/embed/Nru316NF2h0";
	var STU = "https://www.youtube.com/embed/E1iwrfgNOUU";
	
	//List of images representing the videos that will appear in the video gallery
	var imagePRO = "./IMAGES/PRO.png"; /*Error path de la imamgen*/
	var imageAUS = "./IMAGES/AUS.png";
	var imageDUM = "./IMAGES/DUM.png";
	var imageSTU = "./IMAGES/STU.png";	

	//Title of the videos
	var desPRO = "Pink Guy - The Prophecy";
	var desAUS = "Pink Guy - Are You Serious (Axel Boy Remix)";
	var desDUM = "Pink Guy - Dumplings (Borgore Remix)";
	var desSTU = "Pink Guy - Fried Noodles (Getter Remix)";

	//Different cases of the swapping
	switch(videoIframe.src){
		case PRO:
			/*If video in iframe is PRO and image dragged is image1 then swap them*/
			if(imageDrag.id === "image1"){
				/*Swap image and iframe video*/
				videoIframe.src = AUS; 
				imageDrag.src = imagePRO;
				imageDrag.id = "image4";
				/*Swap of the title of the iframe video and the title of the gallery dragged*/
				title.innerHTML = desPRO;	
				document.getElementById("title").innerHTML	= desAUS;	
				/*[resetButton() function] Reset counters on swapped video*/
				resetButton();
				/*[swapDes() function] Swap by methods of an auxiliary variable (swapDescription) of the description of the video on the Iframe
					and the one of the gallery dragged*/
				swapDes(description);
			}
			/*If video in iframe is PRO and image dragged is image2 then swap them*/
			else if(imageDrag.id === "image2"){
				videoIframe.src = DUM;
				imageDrag.src = imagePRO;
				imageDrag.id = "image4";
				title.innerHTML = desPRO;	
				document.getElementById("title").innerHTML	= desDUM;	
				resetButton();
				swapDes(description);
			}
			/*If video in iframe is PRO and image dragged is image3 then swap them*/
			else if(imageDrag.id === "image3"){
				videoIframe.src = STU;
				imageDrag.src = imagePRO;
				imageDrag.id = "image4";
				title.innerHTML = desPRO;
				document.getElementById("title").innerHTML	= desSTU;	
				resetButton();
				swapDes(description);						
			}
			break;
		case AUS:
			/*If video in iframe is AUS and image dragged is image2 then swap them*/
			if(imageDrag.id === "image2") {
				videoIframe.src = DUM;
				imageDrag.src = imageAUS;
				imageDrag.id = "image1";
				title.innerHTML = desAUS;	
				document.getElementById("title").innerHTML	= desDUM;
				resetButton();
				swapDes(description);
			}
			/*If video in iframe is AUS and image dragged is image3 then swap them*/
			else if(imageDrag.id === "image3"){
				videoIframe.src = STU;
				imageDrag.src = imageAUS;
				imageDrag.id = "image1";
				title.innerHTML = desAUS;	
				document.getElementById("title").innerHTML	= desSTU;
				resetButton();
				swapDes(description);
			}
			/*If video in iframe is AUS and image dragged is image4 then swap them*/
			else if(imageDrag.id === "image4"){ 
				videoIframe.src = PRO;
				imageDrag.src = imageAUS;
				imageDrag.id = "image1";
				title.innerHTML = desAUS;	
				document.getElementById("title").innerHTML	= desPRO;
				resetButton();
				swapDes(description);
			}
			break;
		case DUM:
			/*If video in iframe is DUM and image dragged is image1 then swap them*/
			if(imageDrag.id === "image2") {
				videoIframe.src = AUS;
				imageDrag.src = imageDUM;
				imageDrag.id = "image2";
				title.innerHTML = desDUM;	
				document.getElementById("title").innerHTML	= desAUS;
				resetButton();
				swapDes(description);
			}
			/*If video in iframe is DUM and image dragged is image3 then swap them*/
			else if(imageDrag.id === "image3"){
				videoIframe.src = STU;
				imageDrag.src = imageDUM;
				imageDrag.id = "image2";
				title.innerHTML = desDUM;	
				document.getElementById("title").innerHTML	= desSTU;
				resetButton();
				swapDes(description);
			}
			/*If video in iframe is DUM and image dragged is image4 then swap them*/
			else if(imageDrag.id === "image4"){
				videoIframe.src = PRO;
				imageDrag.src = imageDUM;
				imageDrag.id = "image2";
				title.innerHTML = desDUM;	
				document.getElementById("title").innerHTML	= desPRO;
				resetButton();
				swapDes(description);
			}
			break;
		case STU:
			/*If video in iframe is STU and image dragged is image1 then swap them*/
			if(imageDrag.id === "image1") {
				videoIframe.src = AUS;
				imageDrag.src = imageSTU;
				imageDrag.id = "image3";
				title.innerHTML = desSTU;	
				document.getElementById("title").innerHTML	= desAUS;
				resetButton();
				swapDes(description);
			}
			/*If video in iframe is STU and image dragged is image2 then swap them*/
			else if(imageDrag.id === "image2"){
				videoIframe.src = DUM;
				imageDrag.src = imageSTU;
				imageDrag.id = "image3";
				title.innerHTML = desSTU;	
				document.getElementById("title").innerHTML	= desDUM;
				resetButton();
				swapDes(description);
			}
			/*If video in iframe is STU and image dragged is image4 then swap them*/
			else if(imageDrag.id === "image4"){
				videoIframe.src = PRO;
				imageDrag.src = imageSTU;
				imageDrag.id = "image3";
				title.innerHTML = desSTU;	
				document.getElementById("title").innerHTML	= desPRO;
				resetButton();
				swapDes(description);
			}
			break;
		default:
			alert("Error 404");
		break;
	}
}

//Resets like and share buttons when videos are swapped
function resetButton(){
	var resetLikes = "0 Likes";
	var resetShares = "0 Shares";
	
	document.getElementById("likes").innerHTML = resetLikes;
	counter_likes = 0;
	document.getElementById("shares").innerHTML = resetShares;
	counter_shares = 0;
}

//Function that swaps descriptions when function swap is called
function swapDes(description){
	var swapDescription;
	
	swapDescription = description.innerHTML;
	description.innerHTML = document.getElementById("description").innerHTML;
	document.getElementById("description").innerHTML = swapDescription;
}

//Drop and Drag functions. Drop function calls [swap() function] stated above. 
$(function(){
	$( ".gallery" ).draggable({revert: true});
});
$(function(){
	$( "#video" ).droppable({
	  drop: function( event, ui ) {
		/*4 arguments: 
		[0] - droppable zone, Iframe. 
		[1] - Entire box that is being dragged. 
		[2] - Division inside the box that has access to the title of the dragged box. 
		[3] - Division inside the div class=box that has access to the desrciption of the video.*/
		console.log(ui.draggable.context.firstElementChild.firstElementChild.id);
		swap(event.target, ui.draggable.context.firstElementChild.firstElementChild, ui.helper.context.children[1].firstElementChild, ui.helper.context.children[1].children[2]);
	  }
	});
});

/*End of functions for swapping elements*/
/*******************************************************************************************************/
/*******************************************************************************************************/


//Show modal box when page is loaded
function popup(){
	var modal = document.getElementById('myModal');
	modal.style.display="inline";
}

/*Counter functions for likes and shares*/
var counter_likes = 0;
var counter_shares = 0;

function add_likes() {
    return counter_likes += 1;
}
function add_shares() {
    return counter_shares += 1;
}
function counter_function(counter){
	if(counter == likes) document.getElementById("likes").textContent = add_likes() + " Likes";
	else document.getElementById("shares").textContent = add_shares() + " Shares";
}

/*Description boxes slide*/
function slide(id){
	if(id == panel) $("#panel").slideToggle("slow");
	else if(id == panel1) $("#panel1").slideToggle("slow");
	else if(id == panel2)$("#panel2").slideToggle("slow");
	else $("#panel3").slideToggle("slow");
}



//Cookies
//Function to load the cookie when we re-enter the webpage
function getCookie(cname){
	var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//Function to see if there is a cookie stored
function checkCookie(){
	var user = getCookie("email");
	var pattern0 = /[A-z,0-9]/;
	if(user != ""){
		alert("Welcome." + user);
		//Set all the cookie values of the log in on fields
		document.getElementById("margin-account").innerHTML = getCookie("username0");
		//We cannot load the picture cookie since JS does not have the permission to store the path of an uploaded picture
		//document.getElementById("account").src = getCookie("profilePic");
		//load profile piccture and username

	}
	else{
		window.location.assign("./Ex1/Ex1.html");
		}
	//Checks if email is valid and checks if password is valid on the log in
	if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("username").value)) ||
			document.getElementById("password").value == "" || !(document.getElementById("password").value).match(pattern0) ||
			document.getElementById("password").value.length < 8){
		alert("Wrong Email or password format. Please Try again.");    
	}
	//Close modal
	else{
		var modal = document.getElementById('myModal');
		modal.style.display='none';
	}
}

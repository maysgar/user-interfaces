

// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

//Profile Picture
function light(sw) {
	var pic;
		if (sw == 1) {
			pic = "./IMAGES/acc.png"
		}
	document.getElementById('Profile picture').src = pic;
}

//Warning about obligatory fields
function obligatoryFields(){
	var x = document.forms["myForm3"]["email"].value;
	//Email is not the preset one
	if(x != "username@domain.ext"){
		alert("Email cannot be changed.");
		return false;
	}
	
	var y8 = document.getElementById("passwordString").value;
	//Password is wrongly introduced
	/*if(y8.length() > 8){
		alert("Wrong password format. Please Try again.");
	}*/
	
	var y1 = document.forms["myForm1"]["username"].value;
	var y2 = document.forms["myForm3"]["firstname"].value;
	var y3 = document.forms["myForm3"]["lastname"].value;
	var y4 = document.forms["myForm3"]["email"].value;
	var y5 = document.forms["myForm2"]["birthday"].value;
	var y6 = document.forms["myForm4"]["address"].value;
	var y7 = document.forms["myForm4"]["paymentmethod"].value;
	
	//If any field above is empty
	if(y1 == "" || y2 == "" || y3 == "" || y4 == "" || y5 == "" || y6 == "" || y7 == ""){
		//When a blank is left in a mandatory field changes its style
		/*if(y1 == "") document.getElementById("usernameString").style.border-bottom = 2px solid red; 
		if(y2 == "") document.forms["myForm3"]["firstname"].style.input.border-bottom = 2px solid red;
		if(y3 == "") document.forms["myForm3"]["lastname"].style.input.border-bottom = 2px solid red;
		if(y4 == "") document.forms["myForm3"]["email"].style.input.border-bottom = 2px solid red;
		if(y5 == "") document.forms["myForm2"]["birthday"].style.input.border-bottom = 2px solid red;
		if(y6 == "") document.forms["myForm4"]["address"].style.input.border-bottom = 2px solid red;
		if(y7 == "") document.forms["myForm4"]["paymentmethod"].style.input.border-bottom = 2px solid red;*/
		alert("Please fill up all the obligatory fields.");
		return false;
	}
	
	alert("Data successfully saved");
}



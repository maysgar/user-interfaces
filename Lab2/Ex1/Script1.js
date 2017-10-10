

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
	
	var y12 = document.getElementById("terms-check").checked;	
	//Check box of agreements is not checked
	if(!y12){
		alert("Please read and check the agreements first.");
		return false;
	}
	
	var x = document.forms["myForm3"]["email"].value;
	//Email is not the preset one
	if(x != "username@domain.ext"){
		alert("Email cannot be changed.");
		return false;
	}
	var y8 = document.getElementById("password1").value;
	var y9 = document.getElementById("creditcard").value;
	var y10 = document.getElementById("expirationdate").value;
	var y11 = document.getElementById("securitycode").value;
	
	var pattern0 = /[A-z,0-9]/;
	var pattern1 = /[A-z]/;
	var pattern2 = /[0-9]/;
	
	//Password is wrongly introduced
	if(y8.length < 8 || !y8.match(pattern0)){
		alert("Wrong password format. Please Try again.");
	}
		
	/*Credit card number is strictly numbers*/
	if(y9.match(pattern1) || y9.length != 16){
		alert("Wrong credit card format.");
		return false;
	}
	
	//Date format contains letters
	if(y10.match(pattern1)){
		alert("Wrong expiration date format.");
		return false;
	}
	
	//security code has letters
	if(y11.match(pattern1)){
		alert("Wrong security code format.");
		return false;
	}
	
	var phone = document.getElementById("telephone").value;
	//If for some reason you put your phone
	/*if(phone.match(pattern2) || phone.length > 9 || phone.length < 9){
		alert("Wrong number format.");
		return false;
	}*/
	
	var y1 = document.forms["myForm1"]["username1"].value;
	var y2 = document.forms["myForm3"]["firstname"].value;
	var y3 = document.forms["myForm3"]["lastname"].value;
	var y4 = document.forms["myForm3"]["email"].value;
	var y5 = document.forms["myForm2"]["birthday"].value;
	var y6 = document.forms["myForm4"]["address"].value;
	var y7 = document.forms["myForm4"]["paymentmethod"].value;

	//If any field above is empty
	if(y1 == "" || y2 == "" || y3 == "" || y4 == "" || y5 == "" || y6 == "" ||
		y7 == "" || y8 == "" || y9 == "" || y10 == "" || y11 == ""){
		alert("Please fill up all the obligatory fields.");
		return false;
	}

	alert("Data successfully saved");
}
//END OF JAVASCRIPT//





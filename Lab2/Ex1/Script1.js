

//Show modal box when page is loaded
function popup(){
	var modal = document.getElementById('myModal');
	modal.style.display="inline";
}

//Payment method JQuery
$(document).ready(function(){		
    $("credit-card").click(function(){
        $("#pay1").css("display","inline");
        $("#pay2").css("display","none");
        $("#pay3").css("display","none");
    });
    $("paypal").click(function(){
        $("#pay1").css("display","none");
        $("#pay2").css("display","inline");
        $("#pay3").css("display","none");
    });
    $("transfer").click(function(){
        $("#pay1").css("display","none");
        $("#pay2").css("display","none");
        $("#pay3").css("display","inline");
    });
});

//Profile Picture
function light(sw) {
	var pic;
		if (sw == 1) {
			pic = "./IMAGES/acc.png"
		}
	document.getElementById('Profile picture').src = pic;
}

//Email cannot be changed
function cantChange(){
	document.getElementById("email").readOnly = true;
	alert("Email cannot be changed.");
}

//Warning about obligatory fields
function obligatoryFields(){
	
	var y10 = document.getElementById("terms-check").checked;	
	//Check box of agreements is not checked
	if(!y10){
		alert("Please read and check the agreements first.");
		return false;
	}
	
	var y1 = document.forms["myForm1"]["username1"].value;
	var y2 = document.forms["myForm3"]["firstname"].value;
	var y3 = document.forms["myForm3"]["lastname"].value;
	var y4 = document.forms["myForm2"]["birthday"].value;
	var y5= document.forms["myForm4"]["address"].value;
	var y6 = document.forms["myForm4"]["paymentmethod"].value;

	//If any field above is empty
	if(y1 == "" || y2 == "" || y3 == "" || y4 == "" || y5 == "" || y6 == "" ||
		y7 == "" || y8 == "" || y9 == ""){
		alert("Please fill up all the obligatory fields.");
		return false;
	}
	
	var y7 = document.getElementById("creditcard").value;
	var y8 = document.getElementById("expirationdate").value;
	var y9 = document.getElementById("securitycode").value;
	
	var pattern0 = /[A-z,0-9]/;
	var pattern1 = /[A-z]/;
	var pattern2 = /[0-9]/;
		
	/*Credit card number is strictly numbers*/
	if(y7.match(pattern1) || y9.length != 16){
		alert("Wrong credit card format.");
		return false;
	}
	
	//Date format contains letters
	if(y8.match(pattern1)){
		alert("Wrong expiration date format.");
		return false;
	}
	
	//security code has letters
	if(y9.match(pattern1)){
		alert("Wrong security code format.");
		return false;
	}

	alert("Data successfully saved");
}

//Cancel button resets all to blank except password and email
function defaultValues(){
	document.getElementById("username1").value="";
	document.getElementById("firstname").value="";
	document.getElementById("lastname").value="";
	document.getElementById("address").value="";
	document.getElementById("telephone").value="";
	document.getElementById("creditcard").value="";
	document.getElementById("expirationdate").value="";
	document.getElementById("securitycode").value="";
}

//Cookies
function setCookie(cname, evalue){
	document.cookie = cname + "=" + evalue + ";" + ";path=/";
}

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

function checkCookie(){
	var user = getCookie("email");
	var pattern0 = /[A-z,0-9]/;
	if(user != "") alert("Welcome." + user);
	else{
		if(user != "" && user != null){
			user = document.getElementById("username").value;
			setCookie("email",user);
		} 
		//Set values of the log in on fields (password and email)
		//Rest is set to null
		document.getElementById("username1").value="";
		document.getElementById("password1").value = document.getElementById("password").value;
		document.getElementById("firstname").value="";
		document.getElementById("lastname").value="";			
		document.getElementById("address").value="";
		document.getElementById("telephone").value="";
		document.getElementById("creditcard").value="";
		document.getElementById("expirationdate").value="";
		document.getElementById("securitycode").value="";
		
		document.getElementById("email").readOnly = false;
		document.getElementById("email").value = document.getElementById("username").value;
		document.getElementById("email").readOnly = true;
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




















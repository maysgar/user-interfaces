

//Show modal box when page is loaded
function popup(){
	var modal = document.getElementById('myModal');
	modal.style.display="inline";
}

//Payment method JQuery
function pay(){
	var x = document.getElementById("payMethod");
    var y = x.options[x.selectedIndex].value;
    if(y == "credit-card"){
        $("#pay1").show();
        $("#pay2").hide();
        $("#pay3").hide();
    }
    else if(y == "paypal"){
        $("#pay1").hide();
        $("#pay2").show();
        $("#pay3").hide();
    }
    else if(y == "transfer"){
        $("#pay1").hide();
        $("#pay2").hide();
        $("#pay3").show();
    }
}

//Save Profile Picture as a cookie
function setPicture() {
    setCookie("profilePic", document.getElementById("myFile"));
		alert('Profile picture saved');
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
	//var y11= document.getElementById("myFile");

	//If any field above is empty
	if(y1 == "" || y2 == "" || y3 == "" || y4 == "" || y5 == "" || y6 == "" ||
		y7 == "" || y8 == "" || y9 == ""){ // || y11 == ""
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
	if(y7.match(pattern1) || y7.length != 16){
		alert("Wrong credit card format.");
		return false;
	}

	//Date format contains letters
	if(y8.match(pattern1)){
		alert("Wrong expiration date format.");
		return false;
	}

	//security code has letters
	if(y9.match(pattern1 || y9.length != 3)){
		alert("Wrong security code format.");
		return false;
	}

	var firstnameCookie=getCookie("email");
    if (firstnameCookie != "") {
        if((document.getElementById("username1"))!= getCookie("email")){
			alert("Data successfully saved and username has been changed"); //has to be a modal dialog box
			}
		if((document.getElementById("password1"))!= getCookie("password1")){
			alert("Data successfully saved and password has been changed"); //has to be a modal dialog box
		}
		if((document.getElementById("firstname"))!= getCookie("firstname")){
			alert("Data successfully saved and firstname has been changed"); //has to be a modal dialog box
		}
		if((document.getElementById("lastname"))!= getCookie("lastname")){
			alert("Data successfully saved and lastname has been changed"); //has to be a modal dialog box
		}
		if((document.getElementById("address"))!= getCookie("address")){
			alert("Data successfully saved and address has been changed"); //has to be a modal dialog box
		}
		if((document.getElementById("telephone"))!= getCookie("telephone")){
			alert("Data successfully saved and telephone has been changed"); //has to be a modal dialog box
		}
		if((document.getElementById("creditcard"))!= getCookie("creditcard")){
			alert("Data successfully saved and creditcard has been changed"); //has to be a modal dialog box
		}
		if((document.getElementById("expirationdate"))!= getCookie("expirationdate")){
			alert("Data successfully saved and expirationdate has been changed"); //has to be a modal dialog box
		}
		if((document.getElementById("securitycode"))!= getCookie("securitycode")){
			alert("Data successfully saved and securitycode has been changed"); //has to be a modal dialog box
		}

    }

	//if it is the first time we enter the web, when we click save we set all the cookies
	else {
		 setCookie("username0",(document.getElementById("username1")));
		 setCookie("password0",(document.getElementById("password1")));
		 setCookie("firstname0",(document.getElementById("firstname")));
		 setCookie("lastname0",(document.getElementById("lastname")));
		 setCookie("address0",(document.getElementById("address")));
		 setCookie("telephone0",(document.getElementById("telephone")));
		 setCookie("creditcard0",(document.getElementById("creditcard")));
		 setCookie("expirationdate0",(document.getElementById("expirationdate")));
		 setCookie("securitycode0",(document.getElementById("securitycode")));
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
	if(user != ""){
		alert("Welcome." + user);
		//Set all the cookie values of the log in on fields
		/*document.getElementById("username1").value= getCookie("username0");
		document.getElementById("password1").value = document.getElementById("password1").value;
		document.getElementById("firstname").value= getCookie("firstname0");
		document.getElementById("lastname").value= getCookie("lastname0");
		document.getElementById("address").value= getCookie("address0");
		document.getElementById("telephone").value= getCookie("telephone0");
		document.getElementById("creditcard").value= getCookie("creditcard0");
		document.getElementById("expirationdate").value= getCookie("expirationdate0");
		document.getElementById("securitycode").value= getCookie("securitycode0");
		document.getElementById("email").value = document.getElementById("username").value;*/

	}
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

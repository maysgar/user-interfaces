
//Show modal box when page is loaded
function popup(){
	var modal = document.getElementById('myModal');
	modal.style.display="inline";
}


var payCookie; //we introduce a variable to see which payment cookies we need to save
var checkUserCookie; //variable to check wether there is a new account being stored or an old one is being edited
var alertText = "Changes made:\n"//variable to store the changes the user has made in the form

//Payment method JQuery
function pay(){
	var x = document.getElementById("payMethod");
    var y = x.options[x.selectedIndex].value;
    if(y == "credit-card"){
        $("#pay1").show();
        $("#pay2").hide();
        $("#pay3").hide();
				payCookie= 1;
    }
    else if(y == "paypal"){
        $("#pay1").hide();
        $("#pay2").show();
        $("#pay3").hide();
				payCookie= 2;
    }
    else if(y == "transfer"){
        $("#pay1").hide();
        $("#pay2").hide();
        $("#pay3").show();
				payCookie= 3;
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

	var y7 = document.getElementById("creditcard").value;
	var y8 = document.getElementById("expirationdate").value;
	var y9 = document.getElementById("securitycode").value;

	var y10 = document.getElementById("holder-name").value;
	var y11 = document.getElementById("acc-number").value;
	var y12 = document.getElementById("bank-name").value;
	//var y13= document.getElementById("myFile");

	var pattern0 = /[A-z,0-9]/;
	var pattern1 = /[A-z]/;
	var pattern2 = /[0-9]/;

	//If any field above is empty
	if(y1 == "" || y2 == "" || y3 == "" || y4 == "" || y5 == "" || y6 == ""){ // || y13 == ""
		alert("Please fill up all the obligatory fields.");
		return false;
	}
	//If the user pays with credit card, we make sure he has filled the credit card fields
	if(payCookie ==1){
		if(y7 == "" || y8 == "" || y9 == ""){
			alert("Please fill up all the obligatory fields.");
			return false;
		}

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
	}
		//If the user pays with bank transfer, we make sure he has filled the bank transfer fields
		if(payCookie == 3){
			if(y10 == "" || y11 == "" || y12 == ""){
				alert("Please fill up all the obligatory fields.");
				return false;
			}
			/*Holder name is strictly text*/
			if(y10.match(pattern2)){
				alert("Wrong holder name format.");
				return false;
			}

			//Account number is strictly numbers
			if(y11.match(pattern1)){
				alert("Wrong account number format.");
				return false;
			}

			//bank name is strcictly text
			if(y12.match(pattern2)){
				alert("Wrong bank name format.");
				return false;
			}
		}

	//if any of the fields is changed by the user, we change the cookie and remind the user of the change
	var checkMyCookie=getCookie("username0");
    if (checkMyCookie != "" && checkMyCookie == checkUserCookie) {
        if((document.getElementById("username1").value)!= checkMyCookie){
					setCookie("username0",(document.getElementById("username1").value));
					alertText = alertText +"- Username\n";
			   }
				if((document.getElementById("password1").value)!= getCookie("password0")){
					setCookie("password0",(document.getElementById("password1").value));
					alertText = alertText +"- Password\n";
				}
				if((document.getElementById("firstname").value)!= getCookie("firstname0")){
					setCookie("firstname0",(document.getElementById("firstname").value));
					alertText = alertText +"- First name\n";
				}
				if((document.getElementById("lastname").value)!= getCookie("lastname0")){
					setCookie("lastname0",(document.getElementById("lastname").value));
					alertText = alertText +"- Last name\n";
				}
				if((document.getElementById("birthday").value)!= getCookie("birthday0")){
					setCookie("birthday0",(document.getElementById("birthday").value));
					alertText = alertText +"- Birthday\n";
				}
				if((document.getElementById("address").value)!= getCookie("address0")){
					setCookie("address0",(document.getElementById("address").value));
					alertText = alertText +"- Address\n";
				}
				if((document.getElementById("telephone").value)!= getCookie("telephone0")){
					setCookie("telephone0",(document.getElementById("telephone").value));
					alertText = alertText +"- Telephone\n";
				}

		//now we see what payment method the user has chosen
		if(payCookie == 1){
			if((document.getElementById("creditcard").value)!= getCookie("creditcard0")){
				setCookie("creditcard0",(document.getElementById("creditcard").value));
				alertText = alertText +"- Credit card number\n";
			}
			if((document.getElementById("expirationdate").value)!= getCookie("expirationdate0")){
				setCookie("expirationdate0",(document.getElementById("expirationdate").value));
				alertText = alertText +"- Expiration date\n";
			}
			if((document.getElementById("securitycode").value)!= getCookie("securitycode0")){
				setCookie("securitycode0",(document.getElementById("securitycode").value));
				alertText = alertText +"- Security code\n";
			}
	  }
		if(payCookie == 3){
			if((document.getElementById("holder-name").value)!= getCookie("holder-name0")){
				setCookie("holder-name0",(document.getElementById("holder-name").value));
				alertText = alertText +"- Holder name\n";
			}
			if((document.getElementById("acc-number").value)!= getCookie("acc-number0")){
				setCookie("acc-number0",(document.getElementById("acc-number").value));
				alertText = alertText +"- Account number\n";
			}
			if((document.getElementById("bank-name").value)!= getCookie("bank-name0")){
				setCookie("bank-name0",(document.getElementById("bank-name").value));
				alertText = alertText +"- Bank name\n";
			}
		}

		 if(alertText != "Changes made:\n"){
			  alert(alertText);
		 }
    }

	//if it is the first time we enter the web, when we click save we set all the cookies
	else {
		 setCookie("username0",(document.getElementById("username1").value));
		 setCookie("password0",(document.getElementById("password1").value));
		 setCookie("firstname0",(document.getElementById("firstname").value));
		 setCookie("lastname0",(document.getElementById("lastname").value));
		 setCookie("birthday0",(document.getElementById("birthday").value));
		 setCookie("address0",(document.getElementById("address").value));
		 setCookie("telephone0",(document.getElementById("telephone").value));

		 if(payCookie == 1){
			 setCookie("creditcard0",(document.getElementById("creditcard").value));
			 setCookie("expirationdate0",(document.getElementById("expirationdate").value));
			 setCookie("securitycode0",(document.getElementById("securitycode").value));
	   }
		 if(payCookie == 3){
			setCookie("holder-name0",(document.getElementById("holder-name").value));
			setCookie("acc-number0",(document.getElementById("acc-number").value));
			setCookie("bank-name0",(document.getElementById("bank-name").value));
		 }
    }

	alert("Data successfully saved");
}

//Cancel button resets all to blank except password and email
function defaultValues(){
	document.getElementById("username1").value="";
	document.getElementById("firstname").value="";
	document.getElementById("lastname").value="";
	document.getElementById("birthday").value="";
	document.getElementById("address").value="";
	document.getElementById("telephone").value="";
	document.getElementById("creditcard").value="";
	document.getElementById("expirationdate").value="";
	document.getElementById("securitycode").value="";
	document.getElementById("holder-name").value="";
	document.getElementById("acc-number").value="";
	document.getElementById("bank-name").value="";
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

	//Checks if email is valid and checks if password is valid on the log in
	if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("username").value)) ||
		document.getElementById("password").value == "" || !(document.getElementById("password").value).match(pattern0) ||
		document.getElementById("password").value.length < 8){
			alert("Wrong Email or password format. Please Try again.");
			return false;    
		}

  else{
	if(user == document.getElementById("username").value){

		alert("Welcome." + user);
		//Set all the cookie values of the log in on fields
		document.getElementById("username1").value= getCookie("username0");
		document.getElementById("password1").value = getCookie("password0");
		document.getElementById("firstname").value= getCookie("firstname0");
		document.getElementById("lastname").value= getCookie("lastname0");
		document.getElementById("birthday").value= getCookie("birthday0");
		document.getElementById("address").value= getCookie("address0");
		document.getElementById("telephone").value= getCookie("telephone0");
		checkUserCookie= getCookie("username0");

		//depending on the payment method the user chose, we load a different payment display and cookies
		var x = document.getElementById("payMethod");
		var y = x.options[x.selectedIndex].value;

		if(getCookie("creditcard0") != ""){
			document.getElementById("creditcard").value= getCookie("creditcard0");
			document.getElementById("expirationdate").value= getCookie("expirationdate0");
			document.getElementById("securitycode").value= getCookie("securitycode0");
			$("#pay1").show();
			$("#pay2").hide();
			$("#pay3").hide();
			y == "credit-card";
	  }
		if(getCookie("holder-name0") != ""){
			document.getElementById("holder-name").value= getCookie("holder-name0");
			document.getElementById("acc-number").value= getCookie("acc-number0");
			document.getElementById("bank-name").value= getCookie("bank-name0");
			$("#pay1").hide();
			$("#pay2").hide();
			$("#pay3").show();
		  y == "transfer";
		}
		document.getElementById("email").value = user;

	}
	else{
		user = document.getElementById("username").value;
		if(user != "" && user != null){
			setCookie("email",user);
			//Set values of the log in on fields (password and email)
			//Rest is set to null
			document.getElementById("username1").value="";
			document.getElementById("password1").value = document.getElementById("password").value;
			document.getElementById("firstname").value="";
			document.getElementById("lastname").value="";
			document.getElementById("birthday").value="";
			document.getElementById("address").value="";
			document.getElementById("telephone").value="";

			document.getElementById("creditcard").value="";
			document.getElementById("expirationdate").value="";
			document.getElementById("securitycode").value="";

			document.getElementById("holder-name").value="";
			document.getElementById("acc-number").value="";
			document.getElementById("bank-name").value="";

			document.getElementById("email").readOnly = false;
			document.getElementById("email").value = user;
			document.getElementById("email").readOnly = true;
		}
	}
}

	//Close modal


		var modal = document.getElementById('myModal');
		modal.style.display='none';

}

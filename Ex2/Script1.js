

//Show modal box when page is loaded
function popup(){
	var modal = document.getElementById('myModal');
	modal.style.display="inline";
}











	var firstnameCookie=getCookie("email");
    if (firstnameCookie != "") {
        if((document.getElementById("username1"))!= getCookie("email")){
			alert("Data successfully saved and username has been changed"); //has to be a modal dialog box
			}
		if((document.getElementById("password1"))!= getCookie("password1")){
			alert("Data successfully saved and password has been changed"); //has to be a modal dialog box
		  }
    }

	//if it is the first time we enter the web, when we click save we set all the cookies
	else {
		 setCookie("username0",(document.getElementById("username1")));
		 setCookie("password0",(document.getElementById("password1")));
    }

	alert("Data successfully saved");
}

//Cancel button resets all to blank except password and email
function defaultValues(){
	document.getElementById("username1").value="";
	document.getElementById("firstname").value="";
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
		document.getElementById("password1").value = document.getElementById("password1").value;*/

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



//Show modal box when page is loaded
function popup(){
	var modal = document.getElementById('myModal');
	modal.style.display="inline";
}

/*Counter functions for likes and shares*/
var counter_likes = 886213;
var counter_shares = 79542;
var counter_views = 1447862;
function add_likes() {
    return counter_likes += 1;
}
function add_shares() {
    return counter_shares += 1;
}
function add_views() {
    return counter_views += 1;
}
function counter_function(counter){
	if(counter == likes) document.getElementById("likes").textContent = add_likes() + " Likes";
	else if(counter == shares) document.getElementById("shares").textContent = add_shares() + " Shares";
	else document.getElementById("views").textContent = add_views() + " Views";
}

/*Description boxes slide*/
function slide(id){
	if(id == panel) $("#panel").slideToggle("slow");
	else if(id == panel1) $("#panel1").slideToggle("slow");
	else if(id == panel2)$("#panel2").slideToggle("slow");
	else $("#panel3").slideToggle("slow");
}



//Cookies

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
		document.getElementById("margin-account").innerHTML = getCookie("username");
		document.getElementById("account").src = getCookie("profilePic");
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
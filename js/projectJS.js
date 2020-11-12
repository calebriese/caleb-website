window.onload = function() {
    var email = document.getElementById("email");
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var streetone = document.getElementById("streetone");
    var streettwo = document.getElementById("streettwo");
    var city = document.getElementById("city");
    var state = document.getElementById("state");
    var zip = document.getElementById("zip");
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var passwordtwo = document.getElementById("passwordtwo");
    var tel = document.getElementById("tel");
    var birthDay = document.getElementById("birthDay");
    var single = document.getElementById("single");
    var married = document.getElementById("married");
    var maleGender = document.getElementById("maleGender");
    var femaleGender = document.getElementById("femaleGender");
    var listOfElements = document.getElementsByClassName('form-control');

    document.getElementById("submit").setAttribute("disabled","disabled");
    email.onblur = function() { checkEmail(email); checkAll(listOfElements); };
    firstname.onblur = function() { checkMinMax(firstname,0,50); checkAll(listOfElements); };
    lastname.onblur = function() { checkMinMax(lastname,0,50); checkAll(listOfElements); };
    streetone.onblur = function() { checkMinMax(streetone,0,100); checkMinMax(streettwo,-1,100); checkAll(listOfElements); };
    streettwo.onblur = function() { checkMinMax(streettwo,-1,100); checkAll(listOfElements); };
    city.onblur = function() { checkMinMax(city,0,50); checkAll(listOfElements); };
    zip.onblur = function() { checkMinMax(zip,4,10); checkAll(listOfElements); };
    username.onblur = function() { checkMinMax(username,5,50); checkAll(listOfElements); };
    password.onblur = function() { checkPass(password); checkAll(listOfElements); };
    passwordtwo.onblur = function() { checkPass(passwordtwo); checkPassMatch(passwordtwo,password); checkAll(listOfElements); };
    tel.onblur = function() { checkTel(tel); checkMinMax(tel,0,12); checkAll(listOfElements); };
    birthDay.onblur = function() { checkMinMax(birthDay,9,10); checkAll(listOfElements); };
    state.onblur = function() { checkMinMax(state,0,52); checkAll(listOfElements); };
    maleGender.onclick = function() { maleGender.setAttribute("checked","checked"); checkAll(listOfElements); };
    femaleGender.onclick = function() { femaleGender.setAttribute("checked","checked"); checkAll(listOfElements); };
    single.onclick = function() { single.setAttribute("checked","checked"); checkAll(listOfElements); };
    married.onclick = function() { married.setAttribute("checked","checked"); checkAll(listOfElements); };
    document.getElementById("myForm").onreset = function() { resetAll(listOfElements); };
}

function resetAll(list) {
    document.getElementById("submit").setAttribute("disabled","disabled");
    maleGender.removeAttribute("checked","checked");
    femaleGender.removeAttribute("checked","checked");
    single.removeAttribute("checked","checked");
    married.removeAttribute("checked","checked");
    for (let i = 0; i < list.length; i++) {
        list[i].classList.remove("is-invalid");
        list[i].classList.remove("is-valid");
    }
}

function checkAll(list) {
    var maleGender = document.getElementById("maleGender");
    var femaleGender = document.getElementById("femaleGender");
    var single = document.getElementById("single");
    var married = document.getElementById("married");
    var button = document.getElementById("submit");
    var allValid = true;

    for (let i = 0; i < list.length; i++) {
        if (!(list[i].classList.contains("is-valid"))) {
            allValid = false;
        }
    }
    if (!((maleGender.hasAttribute("checked") || femaleGender.hasAttribute("checked")) &&  (single.hasAttribute("checked") || married.hasAttribute("checked")))) {
        allValid = false;
    }

    if (allValid) {
        button.removeAttribute("disabled","disabled");
    } else {
        button.setAttribute("disabled","disabled");
    }
}

function checkMinMax(object, min, max) {
    if ((object.value.length > min) && (object.value.length <= max))
    {
        object.classList.remove("is-invalid");
        object.classList.add("is-valid");
        
    } else {
        object.classList.remove("is-valid");
        object.classList.add("is-invalid");
    }
}

function checkEmail(object) {
	var matches = object.value.search(
		/^\S+@\S+\.\S+$/
	);
	if(matches == -1) {
        object.classList.remove("is-valid");
        object.classList.add("is-invalid");
	} else {
        object.classList.remove("is-invalid");
        object.classList.add("is-valid");
	}
}

function checkPass(object) {
    var matches = object.value.search(

		/[A-Z]+[a-z]+[0-9]+\W/
    );
    if (((object.value.length > 7) && (object.value.length <= 50)) && (matches != -1))
    {
        object.classList.remove("is-invalid");
        object.classList.add("is-valid");
        
    } else {
        object.classList.remove("is-valid");
        object.classList.add("is-invalid");
    }
}
function checkPassMatch(object, object2) {
    if (object.value != object2.value)
    {
        alert("Passwords don't match.");
        object.classList.remove("is-valid");
        object.classList.add("is-invalid");
        object2.classList.remove("is-valid");
        object2.classList.add("is-invalid");
    }
}

function checkTel(object){
    if (object.value.length == 10) {
        var text = object.value;
        var newText = text.substring(0,3) + "-" + text.substring(3,6) + "-" + text.substring(6,10);
        object.value = newText;
    }
}
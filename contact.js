//contact form
const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if (this.value == ""){
     parent.classList.remove("focus");
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

//cursor
const cursor = document.querySelector(".cursor");
        var timeout;
        //Follow cursor
        document.addEventListener("mousemove", (e) => {
            let x = e.clientX;
            let y = e.clientY;

            cursor.style.top = y + "px";
            cursor.style.left = x + "px";
            cursor.style.display = "block";

            //mouse stop
            function mouseStopped(){
                cursor.style.display = "none"
            }
            clearTimeout(timeout);
            timeout = setTimeout(mouseStopped, 3000)
        });
        //Stop following cursor
        document.addEventListener("mouseout",() => {
            cursor.style.display = "none";
        });

//validation
function validation(){
    var userValue = document.getElementById("name").value.trim();
    var emailValue = document.getElementById("email").value.trim();
    var phoneValue = document.getElementById("phone").value.trim();
    var messageValue = document.getElementById("message").value.trim();

    if (userValue === "" || userValue === null){
        alert("Please enter a name");
        return false;
    }
    else if (emailValue === "" || emailValue === null){
        alert("Please enter a valid email address");
        return false;
    }
    else if (!validateEmail(emailValue)){
        alert("Please enter a valid email address");
        return false;
    }
    else if (phoneValue.length < 11){
        alert("Please enter a valid phone number");
        return false;
    }
    else if(messageValue === "" || messageValue === null){
        alert("Message can't be empty!")
        return false;
    }
    else{
        alert("Message has been sent successfully.")
        return true;
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//feedback
var stars = document.getElementsByClassName("fas");
var emoji = document.getElementById("emoji");

stars[0].onclick = function(){
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#e4e4e4";
    stars[2].style.color = "#e4e4e4";
    stars[3].style.color = "#e4e4e4";
    stars[4].style.color = "#e4e4e4";
    emoji.style.transform = "translateX(0)";
}
stars[1].onclick = function(){
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#e4e4e4";
    stars[3].style.color = "#e4e4e4";
    stars[4].style.color = "#e4e4e4";
    emoji.style.transform = "translateX(-100px)";
}
stars[2].onclick = function(){
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#e4e4e4";
    stars[4].style.color = "#e4e4e4";
    emoji.style.transform = "translateX(-200px)";
}
stars[3].onclick = function(){
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#ffd93b";
    stars[4].style.color = "#e4e4e4";
    emoji.style.transform = "translateX(-300px)";
}
stars[4].onclick = function(){
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#ffd93b";
    stars[4].style.color = "#ffd93b";
    emoji.style.transform = "translateX(-400px)";
}
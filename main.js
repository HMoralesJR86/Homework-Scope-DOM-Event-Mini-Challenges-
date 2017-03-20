//this is the answer to problem 1
// function button1() {
// document.getElementById('text').innerText = "I'm right!"
//
// }
//
// function button2() {
//   document.getElementById('text').innerText = "No! I'm right!"
// }

// this is the answer to number 2
// document.getElementById('text').addEventListener("mouseenter", function(){
//   alert("Hey! I told you not to hover over me!")
// })

// this is the answer to problem 3
// var question3 = document.getElementById("question3");
//
// document.addEventListener("keypress",function(x) {
// question3.innerText = x.key;
// })
//
// this is the answer to problem 4
function checkform() {
    var username = document.getElementById("username").value;
    var pw = document.getElementById("password").value;
    var enterYourInfo = document.getElementsByTagName('h1');


    if (password == 12345678) {
        if (username.length > 1) {
            document.getElementById("checkform") = "Welcome."
        } else {
            alert("Incorrect username");
        }
    } else {
        alert("Incorrect password");
    }
}

}

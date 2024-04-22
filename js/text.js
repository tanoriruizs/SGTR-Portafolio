var test = document.getElementById("text-sgtr");

var text = "&lt;/SGTR&gt;"; 
var result = "";
var randomChars = ""; 

function generateRandomChars() {
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
  for (var i = 0; i < 5; i++) { 
    randomChars += characters.charAt(Math.floor(Math.random() * characters.length));
  }
}


window.addEventListener("load", (event) => {
  generateRandomChars(); 
  for (let i = 0; i < randomChars.length; i++) {
    setTimeout(function () {
      result += randomChars[i]; 
      test.innerHTML = result;
    }, 200 * i); 
  }
  setTimeout(function () {
    result = ""; 
    for (let i = 0; i < text.length; i++) {
      setTimeout(function () {
        result += text[i]; 
        test.innerHTML = result;
      }, 200 * i); 
    }
  }, 200 * randomChars.length); 
});

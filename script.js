var a = document.querySelector(".nav2");
var b = document.querySelector(".fa-x");
var c = document.querySelector(".fa-bars");
function bars(){
a.style.display="flex";
b.style.display="flex";
c.style.display="none";
}

function barc(){
a.style.display="none";
b.style.display="none";
c.style.display="flex";
}
var typed = new Typed('.auto-type', {
    strings: ["PROGRAMMER" , "WEB DEVELOPER"],
    typeSpeed: 150,
    backSpeed: 150,
   loop: 1
  });
  document.addEventListener("DOMContentLoaded", function() {
    // Ensure that the body display property is set to block after hiding the loader
    document.getElementById("loader").style.display = "none";
    document.body.style.display = "block";  // Ensure this line is reached
});
window.addEventListener('load', function () {
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');

  // Hide the loader and show the content
  loader.style.display = 'none';
  content.style.display = 'block';
});
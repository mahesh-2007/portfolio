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
    strings: ["Mahesh"],
    typeSpeed: 150,
    backSpeed: 150,
   loop: 1000000000000000000000000000
  });

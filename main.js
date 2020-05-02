// var btn = document.getElementsByClassName("mybtn");
// var replace = document.querySelectorAll("img")[0];

let btn = document.getElementById("mybtn");
let firstSection = document.querySelectorAll("img")[0] // gets the first section element
let secondSection = document.querySelectorAll("img")[2] // gets the second section element

btn.addEventListener('click',function(){
  firstSection.style.display = "none"; // changes the inline style to none which hides it
  secondSection.style.display = "block"; // changes the inline style to block which shows it
})

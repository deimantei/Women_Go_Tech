//music onload
window.onload=function(){
    document.getElementById("my_audio").play();
 }

 function pause() {
    document.getElementById("my_audio").pause();
 }

 function song1(){
    document.getElementById("song1").play();
}
function pause1() {
    document.getElementById("song1").pause();
 }

 function song2(){
    document.getElementById("song2").play();
}
function pause2() {
    document.getElementById("song2").pause();
 }
 function song3(){
    document.getElementById("song3").play();
}
function pause3() {
    document.getElementById("song3").pause();
 }

function alert_function() {
    if ($("#booking").valid()){
     confirm('Thank you!');}
}
 function difficult_function() {
    if ($("#newsletter").valid()){
     confirm('Thank you! See you soon!');}
}

function contact_function() {
    if ($("#contactform").valid()){
     confirm('Thanks for your message!');}
}

//Filterable Image Gallery
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll('.filterable_cards .card');

const filterCards = e => {
   document.querySelector(".active").classList.remove("active");
   e.target.classList.add("active");

filterableCards.forEach(card => {
   card.classList.add('hide');
   if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === 'all'){
      card.classList.remove('hide');
   }
});
};

filterButtons.forEach(button => button.addEventListener('click', filterCards));
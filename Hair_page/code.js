//select all slides
const slides = document.querySelectorAll(".slide");
//loop through slides and set each slides translateX property to index * 100%
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
}); 

//current slide counter
let curSlide = 0;
//maximum numbet of slides
let MaxSlide = slides.length - 1;
//select next slide button
const nextSlide = document.querySelector(".btn-next");
//add event listener and next slide functionality
nextSlide.addEventListener("click", function() {
    //check if current slide is the last and reset current slide
    if (curSlide === MaxSlide) {
        curSlide = MaxSlide;
    } else {
        curSlide++;
        currentIndex = (currentIndex + 1);
        changeText.textContent = `Choose your ${products[currentIndex]}`;
        changeNumber.textContent = `Step ${[currentIndex]}`
    }
 // move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

//select prev slide button 
const prevSlide = document.querySelector(".btn-prev");
//add event listener and navigation functionality
prevSlide.addEventListener("click", function() {
    //check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
        curSlide = 0;
    } else {
        curSlide-- ;
        currentIndex = (currentIndex - 1);
        changeText.textContent = `Choose your ${products[currentIndex]}`;
        changeNumber.textContent = `Step ${[currentIndex]}`
    }
 // move slide by 100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

const changeText = document.querySelector("#change-text");

const products = ["empty","shampoo", "conditioner", "mask", "cream", "payment method"];
let currentIndex = 1;

const changeNumber = document.querySelector("#change-number");






//Checking if a checkbox is checked
const btn = document.querySelector('#final-btn');
const changeCart = document.querySelector('#change-cart');

btn.addEventListener('click', (event) => {
  let checkboxes = document.querySelectorAll('input[name="product"]:checked');
  let values = [];
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });

  let listItems = values.map(value => `<li>${value}</li>`).join('');
  changeCart.innerHTML = `<p>Your shopping cart:</p><ul>${listItems}</ul>`;
});

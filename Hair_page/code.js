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
  let checkboxes = document.querySelectorAll('input[name="product"]');
  let productNames = [];
  let totalPrice = 0;
  checkboxes.forEach((checkbox) => {
    let quantity = checkbox.value;
     if (quantity > 0) {
        const price = parseFloat(checkbox.getAttribute('data-price'));
        const name = checkbox.getAttribute('data-name');
        productNames.push(name + " (" + quantity + " x " + price + " Eur)");
        totalPrice += price * quantity;
     }
  });

  let listItems = productNames.map(name => `<li>${name}</li>`).join('');
  changeCart.innerHTML = `Your shopping cart:<ul>${listItems}</ul>
  Total Price:<strong> ${totalPrice} Eur<strong>`;
});


const paymentBtn = document.querySelector('#payment-btn');
paymentBtn.addEventListener('click', (event) => {
    const warning = document.querySelector('#payment-warning');
    warning.classList.remove("warning-hidden");
})


var selectedPaymentMethod;
const visaBtn = document.querySelector('#visa');
const paypalBtn = document.querySelector('#paypal');
const mastercardBtn = document.querySelector("#mastercard");
const revolutBtn = document.querySelector("#revolut");
const paymentButtons = [visaBtn, paypalBtn, mastercardBtn, revolutBtn];

visaBtn.addEventListener('click', (event) => {
    selectedPaymentMethod = "visa";
    visaBtn.classList.add("selectedPaymentMethod");

    paymentButtons.forEach((button) => {
        if (button.id !== "visa") {
            button.classList.remove("selectedPaymentMethod");
        }
    })

    console.log({selectedPaymentMethod});
});

paypalBtn.addEventListener('click', (event) => {
    selectedPaymentMethod = "paypal";
    paypalBtn.classList.add("selectedPaymentMethod");

    paymentButtons.forEach((button) => {
        if (button.id !== "paypal") {
            button.classList.remove("selectedPaymentMethod");
        }
    })
    
    console.log({selectedPaymentMethod});
});

mastercardBtn.addEventListener('click', (event) => {
    selectedPaymentMethod = "mastercard";
    mastercardBtn.classList.add("selectedPaymentMethod");

    paymentButtons.forEach((button) => {
        if (button.id !== "mastercard") {
            button.classList.remove("selectedPaymentMethod");
        }
    })
    
    console.log({selectedPaymentMethod});
});

revolutBtn.addEventListener('click', (event) => {
    selectedPaymentMethod = "revolut";
    revolutBtn.classList.add("selectedPaymentMethod");

    paymentButtons.forEach((button) => {
        if (button.id !== "revolut") {
            button.classList.remove("selectedPaymentMethod");
        }
    })
    
    console.log({selectedPaymentMethod});
});
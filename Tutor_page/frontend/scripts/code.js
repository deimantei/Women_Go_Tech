const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in')

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
};




const appearOnScroll = new IntersectionObserver(function(
    entries, 
    appearOnScroll)
    {entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
    }, 
    appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})
//Table
function showHideRows(rowPrefix) {
    $(".hidden_row").each(function () {
        if ($(this).attr("id").startsWith(rowPrefix)) {
            $(this).toggle();
        }
    });
}


//Instagram grid

//contact form
function sendEmail(){
    Email.send({
        SecureToken: "44ad3082-fa63-4100-9f6c-89aac9e0a76b",
        To : 'ikiegzamino@gmail.com',
        From:'ikiegzamino@gmail.com',
        //From : document.getElementById("email").value,
        Subject : "Nauja žinutė",
        Body : "Vardas: " + document.getElementById("name").value 
        + "<br> El. pašto adresas: " + document.getElementById("email").value
        + "<br> Žinutė: " + document.getElementById("message").value,         
    }).then(
      message => alert("Ačiū! Jūsų žinutė išsiųsta:).")
    );
}


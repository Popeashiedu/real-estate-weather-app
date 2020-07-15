let day = document.querySelector('.day h2');
let hour = document.querySelector('.hours h2');
let minute = document.querySelector('.minutes h2');
let second = document.querySelector('.seconds h2');



// const logo = document.querySelectorAll('#loading path');

// for (let i = 0; i < logo.length; i++) {
//     console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
// }
// PRELOADER CODE 
let overlay = document.getElementById("overlay");

window.addEventListener('load', function () {
    overlay.style.display = 'none';
})




// NAVBAR COLLAPSE ON CLICK 
// $(document).on("click", ".navbar-collapse", function (e) {
//     if ($(e.target).is("a")) {
//         $(this).collapse("hide");
//     }
// });


// AOS.init({ offset: 300, duration: 800 }); AOS ANIMATION INITIALIZER
$(function () {
    AOS.init({ offset: 300, duration: 1000, easing: "ease-out-quad", once: 0 });
    window.addEventListener('load', AOS.refresh);
});

// TIMER 
function countdown() {
    let now = new Date();
    let eventDate = new Date(2020, 07, 22)

    let currentTime = now.getTime();
    let eventTime = eventDate.getTime();

    let remTime = eventTime - currentTime;

    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    day.innerText = d;
    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;

    setTimeout(countdown, 1000);

}

window.addEventListener('load', countdown);
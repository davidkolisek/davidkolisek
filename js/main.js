
//scroll down add class in to body
document.addEventListener('DOMContentLoaded', function () {
    let scrollPos = window.scrollY;
    let body = document.getElementById('body');

    function add_class_on_scroll() {
        body.classList.add('scrolling');
    }

    function remove_class_on_scroll() {
        body.classList.remove('scrolling');
    }

    window.addEventListener('scroll', function () {
        scrollPos = window.scrollY;
        if (scrollPos > 15) {
            add_class_on_scroll();
        } else {
            remove_class_on_scroll();
        }
    });
});

//if page is one-page
//nav active class toggle
document.addEventListener('click', function () {
    if (!event.target.classList.contains('nav-link')) return;
    event.target.classList.add('active');
    let links = document.querySelectorAll('.nav-link');
    for (let i = 0; i < links.length; i++) {
        if (links[i] === event.target) continue;
        links[i].classList.remove('active');
    }
}, false);

const fab = document.querySelector(".fab-btn");
const aside = document.querySelector(".info-wrapper");
const main = document.querySelector("body");
function show(){
    aside.classList.add("show-me");
    main.classList.add("overlay");
}
function hide(){
    aside.classList.remove("show-me");
    main.classList.remove("overlay");
}


//#region - start of - number counter animation
const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
    const target = document.querySelector(qSelector);
    let startTimestamp = null;
    const step = (timestamp) => {
     if (!startTimestamp) startTimestamp = timestamp;
     const progress = Math.min((timestamp - startTimestamp) / duration, 1);
     target.innerText = Math.floor(progress * (end - start) + start);
     if (progress < 1) {
      window.requestAnimationFrame(step);
     }
    };
    window.requestAnimationFrame(step);
   };
   //#endregion - end of - number counter animation
   
//    document.addEventListener("DOMContentLoaded", () => {
    sleep(3000).then(() => counterAnim("#count1", 0, 5, 1500));
    sleep(3000).then(() => counterAnim("#count2", 2, 40, 1000));
    sleep(3000).then(() => counterAnim("#count3", 1, 10, 1200));
    
//    });
   

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  document.getElementById("year").innerHTML = (new Date).getFullYear();

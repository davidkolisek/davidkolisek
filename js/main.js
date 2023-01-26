//year
document.getElementById("year").innerHTML = (new Date).getFullYear();

//scroll down add class in to body
document.addEventListener('DOMContentLoaded', function () {
    //humble

const scroll = new HumbleScroll({
    enableCallback: true,
    repeat: false,
    mirror: true,
    threshold: 0.25,
    offset: {
      top: -200,
      bottom: -200,
    },
  })
  
  
    //end humble

    let scrollPos = window.scrollY;
    let body = document.querySelector('.ly-body');

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

    //theme switcher
// document.querySelector('.theme-switcher').addEventListener('click', function () {
//     let b = document.querySelector('body');
//     let icon = document.querySelector('.theme-switcher i');
//     if (b.classList.contains('dark-theme')){
//         b.classList.remove('dark-theme')
//         icon.classList.remove('icon-sun');
//         icon.classList.add('icon-moon');
//     }
//     else {
//         b.classList.add("dark-theme")
//         icon.classList.add('icon-sun');
//         icon.classList.remove('icon-moon');
//     }
// });
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

//remove show class on phone breakpoint
const anchorScrools = document.querySelectorAll('.nav-link');
const collapse = document.querySelector('.navbar-collapse');
const brgr = document.querySelector('.navbar-toggler');
Array.from(anchorScrools).map((anchorScrool) => {
    anchorScrool.addEventListener('click', function () {
        collapse.classList.remove('show');
        brgr.classList.add('collapse');
    });
});


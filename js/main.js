//year
document.getElementById("year").innerHTML = (new Date).getFullYear();

//scroll down add class in to body
document.addEventListener('DOMContentLoaded', function () {
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
Array.from(anchorScrools).map((anchorScrool) => {
    anchorScrool.addEventListener('click', function () {
        collapse.classList.remove('show');
    });
});


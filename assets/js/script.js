const Header = document.querySelector("header");

window.addEventListener("scroll", () => {
    Header.classList.toggle("sticky", window.scrollY > 0);
})

const headerMenu = document.querySelector(".header_menu"),
    menuBtn = document.querySelector(".menu-btn"),
    headerMenuItems = headerMenu.querySelectorAll('li a');

    menuBtn.addEventListener('click', () => {
        headerMenu.classList.toggle("show");
    });

headerMenuItems.forEach((item) => {
    item.addEventListener('click', ()=> {
        headerMenu.classList.remove('show');
    })
});


const Preloader = document.querySelector('#preloader');

function removePreloader(){
    setTimeout(() => {
        Preloader.style.display = 'none';
    }, 2000);
}
window.addEventListener('load', removePreloader);


const ScrollTop = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
        ScrollTop.classList.add('active');
    }
    else{
        ScrollTop.classList.remove('active');
    }
})
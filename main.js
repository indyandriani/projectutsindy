// Add JS here
const navbarNav = document.querySelector('.navbar-nav');

//saat hamburge menu di klik
document.querySelector('#hamburger-menu').onclick = ( ) => {
    navbarNav.classList.toggle('active');
};

//klik di luar sidebar langsung hilang
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})
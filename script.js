const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const navbar = document.querySelector('.navbar');


const openModal = function(){
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
    navbar.style.visibility = 'visible';
    navbar.style.display = "grid";
}
const closeModal = function(){
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
    navbar.style.visibility = 'hidden';
    navbar.style.display = "none";
}
openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
const header = document.querySelector("header");
const toggleBar = document.querySelector(".toggle-box");
const menu = document.querySelector("nav");
const bar = document.querySelector(".bar");
const loader = document.querySelector(".loader");


let lastScroll = 0;

window.addEventListener("scroll", ()=>{
    if(scrollY > lastScroll){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active')
    }
    // lastScroll = window.scrollY;
})

toggleBar.addEventListener("click", function () {
    menu.classList.toggle("open");
    bar.classList.toggle("active");
});

menu.addEventListener("click", ()=>{
    menu.classList.remove("open");
    bar.classList.remove("active");
})

window.addEventListener("load", ()=>{
    loader.style.display = 'none';
})
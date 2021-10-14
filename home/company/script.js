window.onload = function(){
    function toggleNav() {
        const body = document.body;
        const hamburger = document.getElementById("js-hamburger");
        const blackBg = document.getElementById("js-black-bg");
        const addNavOpen = function () {
            body.classList.toggle("nav-open")
        }
     
        console.log(hamburger)
        blackBg.addEventListener("click", addNavOpen);
        hamburger.addEventListener("click", addNavOpen);
     }
    toggleNav();
}

window.addEventListener('scroll', ()=>{
    let scrollValue = document.documentElement.scrollTop;
    document.getElementById('scroll').textContent = scrollValue;
    document.querySelector(".wrapper").classList.add("active");
    console.log(scrollValue);

});
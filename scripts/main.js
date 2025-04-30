window.addEventListener("scroll",function(){
    let scrollY = window.scrollY;
    if(scrollY>=200){
        scrollbtn.style.display="block";
    }
    else{
        scrollbtn.style.display="none";
    }

});



let scrollbtn=document.getElementById("scrollbtn");
scrollbtn.addEventListener("click",function(){     
    window.scrollTo(0,0);
});



document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
        menuBtn.classList.toggle("active");
    });
});




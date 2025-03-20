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



const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });




const swiper = new Swiper(".mySwiper", {
    loop: true,            // تشغيل السلايدر بشكل دائري
    navigation: {          // أزرار التنقل
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {          // النقاط السفلية
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {            // تشغيل تلقائي
        delay: 3000,
        disableOnInteraction: false,
    },
});

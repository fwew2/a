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

function showTab(tabId) {
    // إخفاء جميع المحتويات
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // إظهار المحتوى المطلوب
    document.getElementById(tabId).classList.add('active');

    // تحديث الـ Tabs الفعالة
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // تحديد التاب الفعال
    event.target.classList.add('active');
}





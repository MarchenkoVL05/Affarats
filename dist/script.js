$(".carousel").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,autoplay:!0});const requestButton=document.querySelector("#request"),modal=document.querySelector(".modal"),overlay=document.querySelector(".overlay");requestButton.addEventListener("click",(()=>{modal.style.display="block",overlay.style.display="block"})),overlay.addEventListener("click",(()=>{modal.style.display="none",overlay.style.display="none"}));
//# sourceMappingURL=script.js.map
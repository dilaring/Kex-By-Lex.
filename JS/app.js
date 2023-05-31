document.querySelectorAll('.slider').forEach((n, i) => {
    window[`slider${i + 1}`] = new Swiper(n, {
        freeMode: true,
        centeredSlides: true,
        direction: 'vertical',
        mousewheel: true,
        slidesPerView: 1.75,
        slidesOffsetBefore: -125
    })
})
bindSwipers(slider1, slider2, slider3, slider4)


var zoomphoto = document.getElementById('zoomphoto');

var img = document.getElementById('img01');
var zoomphotoImg = document.getElementById("img01");


var span = document.getElementsByClassName("close")[0];


function openFullscreen(element) {
    zoomphoto.style.display = "block";
    zoomphotoImg.src = element.getElementsByTagName("div")[0].style.backgroundImage.slice(5, -2);
}


span.onclick = function () {
    zoomphoto.style.display = "none";
}




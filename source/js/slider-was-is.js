let slider = document.querySelector(".slider");
let slider2 = document.querySelector(".slider2");
let thumb = document.querySelector(".thumb");
let thumb2 = document.querySelector(".thumb2");
let container = document.querySelector(".live-example__was");
let styles = getComputedStyle(slider);
let was = document.querySelector(".was")
let was2 = document.querySelector(".was2")
let is = document.querySelector(".is");
let is2 = document.querySelector(".is2");
let step = parseInt(getComputedStyle(slider).width) / 100;
let img =document.querySelector(".live-example__was")
thumb.onmousedown = function (e) {
    let shiftX = e.clientX - this.getBoundingClientRect().left + slider.getBoundingClientRect().left;
    document.onmousemove = function (e) {
        let newLeft = e.pageX - shiftX;
        if (newLeft < 0) {
            newLeft = 0;
        }
        let rightEdge = slider.offsetWidth - thumb.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }
        thumb.style.left = newLeft + "px";
        f(e)

    }
}
thumb.onmouseup = function () {
    document.onmousemove = null
}

function f(e) {
    let progress = thumb.offsetLeft;
    container.style.width = (100 - parseInt(progress) / 3.9) + "%";
}

was.onclick = function () {
    thumb.style.left = "0px";
    container.style.width = "100%";
}
is.onclick = function () {
    thumb.style.left = parseInt(getComputedStyle(slider).width) - parseInt(getComputedStyle(thumb).width) + "px";
    container.style.width = "0%";

}
is2.onclick = function () {
    thumb2.style.left = parseInt(getComputedStyle(slider2).width) - (parseInt(getComputedStyle(thumb2).width)) +"px";;
    img.style.visibility = "hidden";
}
was2.onclick = function () {
    thumb2.style.left = "0px";
    img.style.visibility = "visible";

}
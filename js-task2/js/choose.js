var page = document.querySelector(".page");
var index = 0;
var dots = document.getElementsByTagName("li");
function showCurrentDot() {
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = "";
    }
    dots[index].className = "active";
}

showCurrentDot();

function hidden() {
    if (index == 0) {
        document.getElementById("butLeft").style.visibility = "hidden";
        document.getElementById("butRight").style.visibility = "visible";
    }
    else if (index == dots.length - 1) {
        document.getElementById("butLeft").style.visibility = "visible";
        document.getElementById("butRight").style.visibility = "hidden";
    }
}

hidden();

for (var i = 0, len = dots.length; i < len; i++) {
    !function (i) {
        dots[i].onclick = function () {
            page.style.left = "-" + (i * 308) + "px";
            index = i;
            showCurrentDot();
            hidden();
        }
    }(i);
}

function pre() {
    index--;
    if (index < 0) {
        index = dots.length;
    }
    page.style.left = "-" + (index * 308) + "px";
    showCurrentDot();
    hidden();
}

function next() {
    index++;
    if (index >= dots.length) {
        index = 0;
    }
    page.style.left = "-" + (index * 308) + "px";
    showCurrentDot();
    hidden();
}

function jump() {
    window.location.href = "setting.html";
}
var list = document.getElementsByClassName("box");
var time;

function begin(one, two, three) {
    if (one == two || two == three || one == three) {
        if (one == two) {
            one = Math.floor(Math.random() * list.length);
        } 
        else if (two == three) {
            two = Math.floor(Math.random() * list.length);
        } 
        else if (one == three) {
            three = Math.floor(Math.random() * list.length);
        }
        begin(one, two, three);
    } 
    else {
        list[one].style.backgroundColor = "rgb" + colors();
        list[two].style.backgroundColor = "rgb" + colors();
        list[three].style.backgroundColor = "rgb" + colors();
    }
}

function colors() {
    var rgb;
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    rgb = "(" + r + "," + g + "," + b + ")";
    return rgb;
}

function run() {
    clearInterval(time);
    time = setInterval(function() {
        for (var i = 0; i < list.length; i++) {
            list[i].style.backgroundColor = "orange";
        }
        var one = Math.floor(Math.random() * list.length);
        var two = Math.floor(Math.random() * list.length);
        var three = Math.floor(Math.random() * list.length);
        begin(one, two, three);
    },1000);
}

function stop() {
    clearInterval(time);
    for (var i = 0; i < list.length; i++) {
        list[i].style.backgroundColor = "orange";
    }
}
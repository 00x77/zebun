var list = document.getElementsByClassName("box");
var time;

function check(one, two, three) {
    return one != two && two != three && one != three;
}

function colors() {
    var rgb = new Array();
    for (var i = 0; i < 3;) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        if (!(r == 255 && g == 165 && b == 0)) {
            rgb[i] = "(" + r + "," + g + "," + b + ")";
            i++;
        }
    }
    if (check(rgb[0], rgb[1], rgb[2])) {
        return rgb;
    } 
    else {
        return colors();
    }
}

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
        var color = colors();
        list[one].style.backgroundColor = "rgb" + color[0];
        list[two].style.backgroundColor = "rgb" + color[1];
        list[three].style.backgroundColor = "rgb" + color[2];
    }
}

function run() {
    clearInterval(time);
    time = setInterval(function () {
        for (var i = 0; i < list.length; i++) {
            list[i].style.backgroundColor = "orange";
        }
        var one = Math.floor(Math.random() * list.length);
        var two = Math.floor(Math.random() * list.length);
        var three = Math.floor(Math.random() * list.length);
        begin(one, two, three);
    }, 1000);
}

function stop() {
    clearInterval(time);
    for (var i = 0; i < list.length; i++) {
        list[i].style.backgroundColor = "orange";
    }
}
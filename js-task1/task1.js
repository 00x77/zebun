var list = document.getElementsByClassName("box");
var time;

function check(one, two, three) {
    return one != two && two != three && one != three;
}

function colors() {
    var rgb = new Array();
    for (var i = 0; i < 3;) {                              //生成一个随机颜色，随机三次
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        if (!(r == 255 && g == 165 && b == 0)) {           //如果生成颜色不是橙色，则给数组添加值，并自增
            rgb[i] = "(" + r + "," + g + "," + b + ")";
            i++;
        }
    }
    if (check(rgb[0], rgb[1], rgb[2])) {                   //如果没有相同的颜色，结果为true，
        return rgb;                                        //就返回值
    } 
    else {                                                 //如果有相同的颜色，就重复函数
        return colors();
    }
}

function begin(one, two, three) {
    if (one == two || two == three || one == three) {
        if (one == two) {                                   //如果有重复的格子，则给一个新的值
            one = Math.floor(Math.random() * list.length);
        }
        else if (two == three) {
            two = Math.floor(Math.random() * list.length);
        }
        else if (one == three) {
            three = Math.floor(Math.random() * list.length);
        }
        begin(one, two, three);                             //重复过程，直到没有重复值
    }
    else {
        var color = colors();
        list[one].style.backgroundColor = "rgb" + color[0];  //给三个格子赋颜色
        list[two].style.backgroundColor = "rgb" + color[1];
        list[three].style.backgroundColor = "rgb" + color[2];
    }
}

function run() {
    clearInterval(time);                                 //停止计时事件
    time = setInterval(function () {                     
        for (var i = 0; i < list.length; i++) {          //给九宫格重置颜色
            list[i].style.backgroundColor = "#ffa500";
        }
        var one = Math.floor(Math.random() * list.length);//随机选择三个格子
        var two = Math.floor(Math.random() * list.length);
        var three = Math.floor(Math.random() * list.length);
        begin(one, two, three);                          //去重
    }, 1000);
}

function stop() {
    clearInterval(time);                                  //停止计时事件
    for (var i = 0; i < list.length; i++) {               //给九宫格重置颜色
        list[i].style.backgroundColor = "#ffa500";
    }
}
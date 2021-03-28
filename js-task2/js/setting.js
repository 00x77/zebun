var inputNumber = document.getElementById("p-num");
var rangeNumber = document.getElementById("setting-range");
var heatmanNumber = document.getElementById("heatman");
var civilianNumber = document.getElementById("civilian");
var FTxt = document.getElementById("firstText");
var STxt = document.getElementById("secondText");
//退回上一个页面
function back() {
    window.location.href = "choose.html";
}
//设置滚动按钮两边的颜色
function color() {
    var a = parseInt(inputNumber.value);
    rangeNumber.style.backgroundSize = ((a - 4) / 14 * 100) + "%" + " " + "100%";
}
//玩家人数的输入框与滚动条同步
function getNumber() {
    if (Number(inputNumber.value) >= 4 && inputNumber.value <= 18) {
        inputNumber.value = rangeNumber.value;
    }
    color();
    ENum();
}
//滚动条改变玩家人数随着改变
function numChange() {
    var text = /^\d+$/.test(inputNumber.value);
    if (inputNumber.value >= 4 && inputNumber.value <= 18 && text == true) {
        rangeNumber.value = inputNumber.value;
        color();
    }
    else {
        alert("请输入正确的玩家数量。");
        inputNumber.value = 4;
        rangeNumber.value = 4;
        color();
    }
    ENum();
}
//减号按钮与滚动条同步
function rangeLeft() {
    rangeNumber.value--;
    if (rangeNumber.value < 4) {
        rangeNumber = 4;
    }
    else {
        inputNumber.value = rangeNumber.value;
        color();
    }
    ENum();
}
//加号按钮与滚动条同步
function rangeRight() {
    rangeNumber.value++;
    if (rangeNumber.value > 18) {
        rangeNumber = 18;
    }
    else {
        inputNumber.value = rangeNumber.value;
        color();
    }
    ENum();
}
//设置各个身份的数量
function ENum() {
    var index = parseInt(inputNumber.value);
    heatmanNumber.innerHTML = Math.floor(index / 4);
    civilianNumber.innerHTML = (index - Math.floor(index / 4));
}
//检测输入人数和分配人数是否相同
function abc() {
    var a = parseInt(inputNumber.value);
    var b = parseInt(heatmanNumber.innerHTML);
    var f = parseInt(civilianNumber.innerHTML);
    if (a == b + f) {
        return true;
    }
}
//检测是否输入词组
function isnull(val) {
    var str = val.value.trim();
    if (str == '' || str == undefined || str == null) {
        return false;
    } else {
        return true;
    }
}
//创建身份数组，并打乱
function shuffle() {
    var a = [];
    for (var i = 0; i < heatmanNumber.innerHTML; i++) {
        a.push("杀手")
    }
    for (var i = 0; i < civilianNumber.innerHTML; i++) {
        a.push("平民")
    }
    var array = a.concat();
    for (var i = array.length; i--;) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
//满足条件就转往下个页面
function go() {
    var text = /^\d+$/.test(inputNumber.value);
    abc();
    var b = abc();
    isnull(FTxt);
    isnull(STxt);
    var c = isnull(FTxt);
    var d = isnull(STxt);
    if (inputNumber.value >= 4 && inputNumber.value <= 18 && text == true && b == true && c == true && d == true) {
        shuffle();
        sessionStorage.setItem("identity",shuffle());
        sessionStorage.setItem("FTxt",FTxt.value);
        sessionStorage.setItem("STxt",STxt.value);
        var a = new Date();
        var time = a.getTime();
        sessionStorage.setItem("startTime", time);
        var x = heatmanNumber.innerHTML;
        var y = civilianNumber.innerHTML;
        sessionStorage.setItem("heatmanNumber", x);
        sessionStorage.setItem("civilianNumber", y);
        window.location.href = "fan.html";
    }
    else if (inputNumber.value < 4 && inputNumber.value > 18 && text != true) {
        alert("请输入正确的玩家数量。");
    }
    else if (b != true && inputNumber.value >= 4 && inputNumber.value <= 18) {
        alert("请点击'点击设置'按钮设置人数。");
    }
    else if (c != true || d != true) {
        alert("请输入词组")
    }
}
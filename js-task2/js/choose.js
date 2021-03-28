$(document).ready(function () {
    var page = document.querySelector(".page");
    var index = 0;
    var dots = document.getElementsByTagName("li");
    var clickNumber = 0;
    //分页按钮上色
    function showCurrentDot() {
        for (var i = 0; i < dots.length; i++) {
            dots[i].className = "";
        }
        dots[index].className = "active";
    }

    showCurrentDot();
    //上一页下一页按钮的隐藏
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
    $("#menu").click(function () {
        clickNumber++;
        if (clickNumber % 2 != 0) {
            $("#mainbody").animate({
                left: "24.5rem",
                top: "3.5rem"
            }, function () {
                $("#mainbody").css("box-shadow", "-4px -4px 10px #999")
            })
        }
        else {
            $("#mainbody").animate({
                left: "0",
                top: "0"
            }, function () {
                $("#mainbody").css("box-shadow", "none")
            })
        }
    })
    //分页按钮
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
    //上一页按钮
    $("#butLeft").click(function () {
        index--;
        if (index < 0) {
            index = dots.length;
        }
        page.style.left = "-" + (index * 308) + "px";
        showCurrentDot();
        hidden();
    });
    //下一页按钮
    $("#butRight").click(function () {
        index++;
        if (index >= dots.length) {
            index = 0;
        }
        page.style.left = "-" + (index * 308) + "px";
        showCurrentDot();
        hidden();
    });
    //游戏界面
    $(".nextpage").click(function () {
        window.location.href = "setting.html";
    });
});
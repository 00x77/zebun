$(document).ready(function () {
    //检测是否第一次进入这个页面
    if (sessionStorage.getItem("stepTime") != null) {
        var aTime = sessionStorage.getItem("stepTime");
        var stepTime = aTime.split(",");
    }
    else {
        var stepTime = [];
        stepTime[0] = parseInt(sessionStorage.getItem("startTime"));
    }
    //当杀手人数为0或平民人数小于杀手人数时结束游戏
    //如果游戏没结束则检测是否第一次进入这个页面，并把天数记录下
    if (parseInt(sessionStorage.getItem("civilianNumber")) < parseInt(sessionStorage.getItem("heatmanNumber"))) {
        var a = new Date();
        var time = a.getTime();
        sessionStorage.setItem("endTime", time);
        stepTime.push(time);
        sessionStorage.setItem("stepTime", stepTime);
        alert("游戏结束。")
        voteReturn();
        sessionStorage.setItem("heatmanWin", 0);
        location.href = "result.html"
    }
    else if (sessionStorage.getItem("heatmanNumber") == 0) {
        var a = new Date();
        var time = a.getTime();
        sessionStorage.setItem("endTime", time);
        stepTime.push(time);
        sessionStorage.setItem("stepTime", stepTime);
        alert("游戏结束。")
        voteReturn();
        sessionStorage.setItem("civilianWin", 0);
        location.href = "result.html"
    }
    else if (sessionStorage.getItem("day") != null) {
        var z = sessionStorage.getItem("day");
        var day = new Array;
        day = z.split(",");
        if (sessionStorage.getItem("vote-step") != null) {
            var a = new Date();
            var time = a.getTime();
            stepTime.push(time);
            sessionStorage.setItem("stepTime", stepTime);
        }
    }
    else {
        var day = [0];
        sessionStorage.setItem("day",day);
    }

    sessionStorage.removeItem("kill-step");
    sessionStorage.removeItem("vote-step");

    function voteReturn() {
        if (sessionStorage.getItem("vote-step") != null) {
            var a = sessionStorage.getItem("day");
            var day = a.split(",");
            day.splice(1, 1);
            sessionStorage.setItem("day", day);
        }
    }
    //将阿拉伯数字转为汉字，用于显示第几天
    function convertToChinese(num) {
        var str = num.toString();
        var len = num.toString().length;
        var C_Num = [];
        for (var i = 0; i < len; i++) {
            C_Num.push(N[str.charAt(i)]);
        }
        return C_Num.join('');
    }
    //根据天数创建页面
    for (var o = 0; o < day.length; o++) {
        var number = o + 1;
        var N = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
        var chinese = convertToChinese(number);
        $("#well").append('<div class="w-100p bd-01 bdc-c9 mb-25">' +
            '<div class="ft-15 lh-40 ls-02 text-center bgc-white c-29">第' + chinese + '天</div>' +
            '<div class="bdt-01 bdc-c9 bgc-c9">' +
            '<div class="f-l w-20 h-285 bgc-white bdr-01 bdc-c9 brts-02"></div>' +
            '<div class="h-285 ml-20 pt-25 pr-30 pl-30 pb-40 bgc-white blts-02">' +
            '<div class="moon">' +
            '<button class="step kill">杀手杀人</button>' +
            '</div>' +
            '<div class="sun">' +
            '<button class="step Dspeak" disabled>亡灵发表遗言</button>' +
            '<button class="step Lspeak" disabled>玩家依次发言</button>' +
            '<button class="step vote" disabled>投票</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>')
    }
    //根据进行到第几步并给按钮上色
    if (sessionStorage.getItem("step") != null) {
        var a = sessionStorage.getItem("step");
        var x = a.split(",");
        $(".Dspeak").attr("disabled", false);
    }
    else {
        var x = [];
    }

    for (var i = 0; i < x.length; i++) {
        $(".step").eq(i).css("background-color", "#92b7a5");
        $(".step").eq(i).addClass("step-chance")
        $(".step").eq(i).attr("disabled", true);
    }
    //杀人按钮点击效果
    $(".kill").click(function () {
        x.push(0);
        sessionStorage.setItem("step", x);
        sessionStorage.setItem("kill-step", "abaaba")
        window.location.href = "kill.html";
    });
    //死者发言按钮点击效果
    $(".Dspeak").click(function () {
        x.push(0);
        var l = document.getElementsByClassName("Dspeak");
        for (var i = 0; i < l.length; i++) {
            $(".Dspeak").eq(i).css("background-color", "#92b7a5");
            $(".Dspeak").eq(i).addClass("step-chance")
            $(".Dspeak").eq(i).attr("disabled", true);
            $(".Lspeak").eq(i).attr("disabled", false);
        }
        alert("请死者亮明身份并发表遗言。")
    })
    //讨论按钮点击效果
    $(".Lspeak").click(function () {
        x.push(0);
        var l = document.getElementsByClassName("Lspeak");
        for (var i = 0; i < l.length; i++) {
            $(".Lspeak").eq(i).css("background-color", "#92b7a5");
            $(".Lspeak").eq(i).addClass("step-chance")
            $(".Lspeak").eq(i).attr("disabled", true);
            $(".vote").eq(i).attr("disabled", false);
        }
        alert("玩家依次发言讨论。")
    })
    //投票按钮点击效果
    $(".vote").click(function () {
        x.push(0);
        day.push(0)
        sessionStorage.setItem("day", day);
        sessionStorage.setItem("step", x);
        sessionStorage.setItem("day", day);
        sessionStorage.setItem("vote-step", "abaaba")
        window.location.href = "kill.html";
    });
    //法官日记按钮点击效果
    $("#diary").click(function () {
        sessionStorage.setItem("ben", 0);
        location.href = "diary.html"
    })
});